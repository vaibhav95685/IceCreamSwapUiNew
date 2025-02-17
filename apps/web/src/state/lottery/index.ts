/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LotteryTicket, LotteryStatus } from 'config/constants/types'
import { LotteryState, LotteryRoundGraphEntity, LotteryUserGraphEntity, LotteryResponse } from 'state/types'
import { fetchLottery, fetchCurrentLotteryIdAndMaxBuy } from './helpers'
import getLotteriesData from './getLotteriesData'
import getUserLotteryData, { getGraphLotteryUser } from './getUserLotteryData'
import { resetUserState } from '../global/actions'
import {ChainId} from "@pancakeswap/sdk";

interface PublicLotteryData {
  currentLotteryId: string
  maxNumberTicketsPerBuyOrClaim: string
}

const initialState: LotteryState = {
  currentLotteryId: null,
  isTransitioning: false,
  maxNumberTicketsPerBuyOrClaim: null,
  currentRound: {
    isLoading: true,
    lotteryId: null,
    status: LotteryStatus.PENDING,
    startTime: '',
    endTime: '',
    priceTicketInCake: '',
    discountDivisor: '',
    treasuryFee: '',
    firstTicketId: '',
    lastTicketId: '',
    amountCollectedInCake: '',
    finalNumber: null,
    cakePerBracket: [],
    countWinnersPerBracket: [],
    rewardsBreakdown: [],
    userTickets: {
      isLoading: true,
      tickets: [],
    },
  },
  lotteriesData: null,
  userLotteryData: { account: '', totalCake: '', totalTickets: '', rounds: [] },
}

export const fetchCurrentLottery = createAsyncThunk<LotteryResponse, { currentLotteryId: string }>(
  'lottery/fetchCurrentLottery',
  async ({ currentLotteryId }) => {
    const lotteryInfo = await fetchLottery(currentLotteryId)
    return lotteryInfo
  },
)

export const fetchCurrentLotteryId = createAsyncThunk<PublicLotteryData, ChainId>('lottery/fetchCurrentLotteryId', async (chainId: ChainId) => {
  const currentIdAndMaxBuy = await fetchCurrentLotteryIdAndMaxBuy(chainId)
  return currentIdAndMaxBuy
})

export const fetchUserTicketsAndLotteries = createAsyncThunk<
  { userTickets: LotteryTicket[]; userLotteries: LotteryUserGraphEntity },
  { account: string; currentLotteryId: string, chainId: ChainId }
>('lottery/fetchUserTicketsAndLotteries', async ({ account, currentLotteryId , chainId}) => {
  const userLotteriesRes = await getUserLotteryData(account, currentLotteryId, chainId)
  const userParticipationInCurrentRound = userLotteriesRes.rounds?.find((round) => round.lotteryId === currentLotteryId)
  const userTickets = userParticipationInCurrentRound?.tickets

  // User has not bought tickets for the current lottery, or there has been an error
  if (!userTickets || userTickets.length === 0) {
    return { userTickets: [], userLotteries: userLotteriesRes }
  }

  return { userTickets, userLotteries: userLotteriesRes }
})

export const fetchPublicLotteries = createAsyncThunk<LotteryRoundGraphEntity[], { currentLotteryId: string, chainId: ChainId }>(
  'lottery/fetchPublicLotteries',
  async ({ currentLotteryId , chainId}) => {
    const lotteries = await getLotteriesData(currentLotteryId, chainId)
    return lotteries
  },
)

export const fetchUserLotteries = createAsyncThunk<
  LotteryUserGraphEntity,
  { account: string; currentLotteryId: string, chainId: ChainId }
>('lottery/fetchUserLotteries', async ({ account, currentLotteryId, chainId }) => {
  const userLotteries = await getUserLotteryData(account, currentLotteryId, chainId)
  return userLotteries
})

export const fetchAdditionalUserLotteries = createAsyncThunk<
  LotteryUserGraphEntity,
  { account: string; skip?: number }
>('lottery/fetchAdditionalUserLotteries', async ({ account, skip }) => {
  const additionalUserLotteries = await getGraphLotteryUser(account, undefined, skip)
  return additionalUserLotteries
})

export const setLotteryIsTransitioning = createAsyncThunk<{ isTransitioning: boolean }, { isTransitioning: boolean }>(
  `lottery/setIsTransitioning`,
  async ({ isTransitioning }) => {
    return { isTransitioning }
  },
)

export const LotterySlice = createSlice({
  name: 'Lottery',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(resetUserState, (state) => {
      state.userLotteryData = { ...initialState.userLotteryData }
      state.currentRound = { ...state.currentRound, userTickets: { ...initialState.currentRound.userTickets } }
    })
    builder.addCase(fetchCurrentLottery.fulfilled, (state, action: PayloadAction<LotteryResponse>) => {
      state.currentRound = { ...state.currentRound, ...action.payload }
    })
    builder.addCase(fetchCurrentLotteryId.fulfilled, (state, action: PayloadAction<PublicLotteryData>) => {
      state.currentLotteryId = action.payload.currentLotteryId
      state.maxNumberTicketsPerBuyOrClaim = action.payload.maxNumberTicketsPerBuyOrClaim
    })
    builder.addCase(
      fetchUserTicketsAndLotteries.fulfilled,
      (state, action: PayloadAction<{ userTickets: LotteryTicket[]; userLotteries: LotteryUserGraphEntity }>) => {
        state.currentRound = {
          ...state.currentRound,
          userTickets: { isLoading: false, tickets: action.payload.userTickets },
        }
        state.userLotteryData = action.payload.userLotteries
      },
    )
    builder.addCase(fetchPublicLotteries.fulfilled, (state, action: PayloadAction<LotteryRoundGraphEntity[]>) => {
      state.lotteriesData = action.payload
    })
    builder.addCase(fetchUserLotteries.fulfilled, (state, action: PayloadAction<LotteryUserGraphEntity>) => {
      state.userLotteryData = action.payload
    })
    builder.addCase(fetchAdditionalUserLotteries.fulfilled, (state, action: PayloadAction<LotteryUserGraphEntity>) => {
      const mergedRounds = [...state.userLotteryData.rounds, ...action.payload.rounds]
      state.userLotteryData = { ...state.userLotteryData, rounds: mergedRounds }
    })
    builder.addCase(
      setLotteryIsTransitioning.fulfilled,
      (state, action: PayloadAction<{ isTransitioning: boolean }>) => {
        state.isTransitioning = action.payload.isTransitioning
      },
    )
  },
})

export default LotterySlice.reducer
