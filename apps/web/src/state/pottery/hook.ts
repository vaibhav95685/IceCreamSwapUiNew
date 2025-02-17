import { useWeb3React } from '@pancakeswap/wagmi'
import { batch, useSelector } from 'react-redux'
import { useAppDispatch } from 'state'
import { useFastRefreshEffect } from 'hooks/useRefreshEffect'
import { fetchCakeVaultPublicData, fetchCakeVaultUserData } from 'state/pools'
import { fetchLastVaultAddressAsync, fetchPublicPotteryDataAsync, fetchPotteryUserDataAsync } from './index'
import { potterDataSelector } from './selectors'
import { State } from '../types'
import {useActiveChainId} from "../../hooks/useActiveChainId";

export const usePotteryFetch = () => {
  const { chainId } = useActiveChainId()
  const { account } = useWeb3React()
  const dispatch = useAppDispatch()
  const potteryVaultAddress = useLatestVaultAddress()

  useFastRefreshEffect(() => {
    dispatch(fetchLastVaultAddressAsync())

    if (potteryVaultAddress) {
      batch(() => {
        dispatch(fetchCakeVaultPublicData(chainId))
        dispatch(fetchPublicPotteryDataAsync(chainId))
        if (account) {
          dispatch(fetchPotteryUserDataAsync({ account, chainId }))
          dispatch(fetchCakeVaultUserData({ account, chainId }))
        }
      })
    }
  }, [potteryVaultAddress, account, dispatch, chainId])
}

export const usePotteryData = () => {
  return useSelector(potterDataSelector)
}

export const useLatestVaultAddress = () => {
  return useSelector((state: State) => state.pottery.lastVaultAddress)
}
