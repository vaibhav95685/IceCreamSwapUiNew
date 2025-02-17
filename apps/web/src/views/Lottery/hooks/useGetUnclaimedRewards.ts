import { useState, useEffect } from 'react'
import { useWeb3React } from '@pancakeswap/wagmi'
import { useGetLotteriesGraphData, useGetUserLotteriesGraphData, useLottery } from 'state/lottery/hooks'
import fetchUnclaimedUserRewards from 'state/lottery/fetchUnclaimedUserRewards'
import { FetchStatus } from 'config/constants/types'
import {useActiveChainId} from "../../../hooks/useActiveChainId";

const useGetUnclaimedRewards = () => {
  const { account } = useWeb3React()
  const { chainId } = useActiveChainId()
  const { isTransitioning, currentLotteryId } = useLottery()
  const userLotteryData = useGetUserLotteriesGraphData()
  const lotteriesData = useGetLotteriesGraphData()
  const [unclaimedRewards, setUnclaimedRewards] = useState([])
  const [fetchStatus, setFetchStatus] = useState(FetchStatus.Idle)

  useEffect(() => {
    // Reset on account change and round transition
    setFetchStatus(FetchStatus.Idle)
  }, [account, isTransitioning])

  const fetchAllRewards = async () => {
    setFetchStatus(FetchStatus.Fetching)
    const unclaimedRewardsResponse = await fetchUnclaimedUserRewards(
      account,
      userLotteryData,
      lotteriesData,
      currentLotteryId,
      chainId,
    )
    setUnclaimedRewards(unclaimedRewardsResponse)
    setFetchStatus(FetchStatus.Fetched)
  }

  return { fetchAllRewards, unclaimedRewards, fetchStatus }
}

export default useGetUnclaimedRewards
