import { ChainId } from '@pancakeswap/sdk'
import {CHAIN_IDS} from "../../utils/wagmi";

export const SUPPORT_ONLY_BITGERT = [ChainId.BITGERT]

export const SUPPORT_SWAP = [ChainId.BITGERT, ChainId.DOKEN, ChainId.FUSE, ChainId.DOGE, ChainId.XDC]
export { SUPPORT_FARMS } from '@pancakeswap/farms'
export const SUPPORT_STAKING = [ChainId.BITGERT, ChainId.XDC]
export const SUPPORT_INFO = [ChainId.BITGERT]
export const SUPPORT_BRIDGE = CHAIN_IDS

export const SUPPORT_ZAP = []
