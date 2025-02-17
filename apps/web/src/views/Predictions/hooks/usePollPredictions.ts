import { useWeb3React } from '@pancakeswap/wagmi'
import { useGetPredictionsStatus } from 'state/predictions/hooks'
import { fetchPredictionData } from 'state/predictions'
import { PredictionStatus } from 'state/types'
import useSWR from 'swr'
import useLocalDispatch from 'contexts/LocalRedux/useLocalDispatch'
import {useActiveChainId} from "../../../hooks/useActiveChainId";

const POLL_TIME_IN_SECONDS = 10

const usePollPredictions = () => {
  const dispatch = useLocalDispatch()
  const { chainId } = useActiveChainId()
  const { account } = useWeb3React()
  const status = useGetPredictionsStatus()

  useSWR(
    status !== PredictionStatus.INITIAL ? ['predictions', account] : null,
    () => dispatch(fetchPredictionData({ account , chainId})),
    {
      refreshInterval: POLL_TIME_IN_SECONDS * 1000,
      refreshWhenHidden: true,
      refreshWhenOffline: true,
    },
  )
}

export default usePollPredictions
