import BigNumber from 'bignumber.js'
import erc20ABI from 'config/abi/erc20.json'
import masterchefABIV1 from 'config/abi/masterchefV1.json'
import multicall from 'utils/multicall'
import { getMasterChefV1Address } from 'utils/addressHelpers'
import { SerializedFarmConfig } from 'config/constants/types'
import {ChainId} from "@pancakeswap/sdk";

export const fetchFarmUserAllowances = async (account: string, farmsToFetch: SerializedFarmConfig[], chainId: ChainId) => {
  const masterChefAddress = getMasterChefV1Address()

  const calls = farmsToFetch.map((farm) => {
    const lpContractAddress = farm.lpAddress
    return { address: lpContractAddress, name: 'allowance', params: [account, masterChefAddress] }
  })

  const rawLpAllowances = await multicall<BigNumber[]>(erc20ABI, calls, chainId)
  const parsedLpAllowances = rawLpAllowances.map((lpBalance) => {
    return new BigNumber(lpBalance).toJSON()
  })
  return parsedLpAllowances
}

export const fetchFarmUserTokenBalances = async (account: string, farmsToFetch: SerializedFarmConfig[], chainId: ChainId) => {
  const calls = farmsToFetch.map((farm) => {
    const lpContractAddress = farm.lpAddress
    return {
      address: lpContractAddress,
      name: 'balanceOf',
      params: [account],
    }
  })

  const rawTokenBalances = await multicall(erc20ABI, calls, chainId)
  const parsedTokenBalances = rawTokenBalances.map((tokenBalance) => {
    return new BigNumber(tokenBalance).toJSON()
  })
  return parsedTokenBalances
}

export const fetchFarmUserStakedBalances = async (account: string, farmsToFetch: SerializedFarmConfig[], chainId) => {
  const masterChefAddress = getMasterChefV1Address()

  const calls = farmsToFetch.map((farm) => {
    return {
      address: masterChefAddress,
      name: 'userInfo',
      params: [farm.v1pid, account],
    }
  })

  const rawStakedBalances = await multicall(masterchefABIV1, calls, chainId)
  const parsedStakedBalances = rawStakedBalances.map((stakedBalance) => {
    return new BigNumber(stakedBalance[0]._hex).toJSON()
  })
  return parsedStakedBalances
}

export const fetchFarmUserEarnings = async (account: string, farmsToFetch: SerializedFarmConfig[], chainId: ChainId) => {
  const masterChefAddress = getMasterChefV1Address()

  const calls = farmsToFetch.map((farm) => {
    return {
      address: masterChefAddress,
      name: 'pendingIce',
      params: [farm.v1pid, account],
    }
  })

  const rawEarnings = await multicall(masterchefABIV1, calls, chainId)
  const parsedEarnings = rawEarnings.map((earnings) => {
    return new BigNumber(earnings).toJSON()
  })
  return parsedEarnings
}
