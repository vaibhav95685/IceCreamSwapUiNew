import { useCallback } from 'react'
import { useAppDispatch } from 'state'
import { useTranslation } from '@pancakeswap/localization'
import { useToast } from '@pancakeswap/uikit'
import useCatchTxError from 'hooks/useCatchTxError'
import { ToastDescriptionWithTx } from 'components/Toast'
import { usePotterytVaultContract } from 'hooks/useContract'
import { useWeb3React } from '@pancakeswap/wagmi'
import { fetchPotteryUserDataAsync } from 'state/pottery'
import {useActiveChainId} from "../../../hooks/useActiveChainId";

export const useWithdrawPottery = (redeemShare: string, vaultAddress: string) => {
  const { t } = useTranslation()
  const { chainId } = useActiveChainId()
  const { account } = useWeb3React()
  const dispatch = useAppDispatch()
  const { toastSuccess } = useToast()
  const { fetchWithCatchTxError, loading: isPending } = useCatchTxError()
  const contract = usePotterytVaultContract(vaultAddress)

  const handleWithdraw = useCallback(async () => {
    const receipt = await fetchWithCatchTxError(() => contract.redeem(redeemShare, account, account))

    if (receipt?.status) {
      toastSuccess(
        t('Success!'),
        <ToastDescriptionWithTx txHash={receipt.transactionHash}>
          {t('Your earnings have also been harvested to your wallet')}
        </ToastDescriptionWithTx>,
      )
      dispatch(fetchPotteryUserDataAsync({account, chainId}))
    }
  }, [account, contract, redeemShare, t, dispatch, fetchWithCatchTxError, toastSuccess, chainId])

  return { isPending, handleWithdraw }
}
