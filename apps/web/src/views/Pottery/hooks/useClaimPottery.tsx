import { useCallback } from 'react'
import { useAppDispatch } from 'state'
import { useTranslation } from '@pancakeswap/localization'
import { useToast } from '@pancakeswap/uikit'
import useCatchTxError from 'hooks/useCatchTxError'
import { ToastDescriptionWithTx } from 'components/Toast'
import { usePotterytDrawContract } from 'hooks/useContract'
import { useWeb3React } from '@pancakeswap/wagmi'
import { fetchPotteryUserDataAsync } from 'state/pottery'
import {useActiveChainId} from "../../../hooks/useActiveChainId";

export const useClaimPottery = () => {
  const { t } = useTranslation()
  const { chainId } = useActiveChainId()
  const { account } = useWeb3React()
  const dispatch = useAppDispatch()
  const { toastSuccess } = useToast()
  const contract = usePotterytDrawContract()
  const { fetchWithCatchTxError, loading: isPending } = useCatchTxError()

  const handleClaim = useCallback(async () => {
    const receipt = await fetchWithCatchTxError(() => contract.claimReward())

    if (receipt?.status) {
      toastSuccess(
        t('Success!'),
        <ToastDescriptionWithTx txHash={receipt.transactionHash}>
          {t('You have successfully claimed your rewards.')}
        </ToastDescriptionWithTx>,
      )
      dispatch(fetchPotteryUserDataAsync({ account, chainId }))
    }
  }, [account, contract, t, dispatch, fetchWithCatchTxError, toastSuccess, chainId])

  return { isPending, handleClaim }
}
