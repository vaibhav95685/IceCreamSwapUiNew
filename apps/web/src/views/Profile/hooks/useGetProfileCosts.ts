import { useEffect, useState } from 'react'
import { BigNumber } from '@ethersproject/bignumber'
import { Zero } from '@ethersproject/constants'
import { useTranslation } from '@pancakeswap/localization'
import { multicallv2 } from 'utils/multicall'
import profileABI from 'config/abi/pancakeProfile.json'
import { getPancakeProfileAddress } from 'utils/addressHelpers'
import { useToast } from '@pancakeswap/uikit'
import {useActiveChainId} from "../../../hooks/useActiveChainId";

const useGetProfileCosts = () => {
  const { t } = useTranslation()
  const { chainId } = useActiveChainId()
  const [isLoading, setIsLoading] = useState(true)
  const [costs, setCosts] = useState({
    numberCakeToReactivate: Zero,
    numberCakeToRegister: Zero,
    numberCakeToUpdate: Zero,
  })
  const { toastError } = useToast()

  useEffect(() => {
    const fetchCosts = async () => {
      try {
        const calls = ['numberCakeToReactivate', 'numberCakeToRegister', 'numberCakeToUpdate'].map((method) => ({
          address: getPancakeProfileAddress(),
          name: method,
        }))
        const [[numberCakeToReactivate], [numberCakeToRegister], [numberCakeToUpdate]] = await multicallv2<
          [[BigNumber], [BigNumber], [BigNumber]]
          // @ts-ignore fix chainId support
        >({ abi: profileABI, calls, chainId })

        setCosts({
          numberCakeToReactivate,
          numberCakeToRegister,
          numberCakeToUpdate,
        })
        setIsLoading(false)
      } catch (error) {
        toastError(t('Error'), t('Could not retrieve ICE costs for profile'))
      }
    }

    fetchCosts()
  }, [setCosts, toastError, t])

  return { costs, isLoading }
}

export default useGetProfileCosts
