import { FARM_AUCTION_HOSTING_IN_SECONDS } from 'config/constants'
import farmAuctionAbi from 'config/abi/farmAuction.json'
import { getFarmAuctionContract } from 'utils/contractHelpers'
import { multicallv2 } from 'utils/multicall'
import { ethersToBigNumber } from '@pancakeswap/utils/bigNumber'
import { BITGERT_BLOCK_TIME } from 'config'
import { add, sub } from 'date-fns'
import { sortAuctionBidders } from '../../views/FarmAuction/helpers'
import {ChainId} from "@pancakeswap/sdk";

const fetchFarmsWithAuctions = async (
  currentBlock: number,
  chainId: ChainId
): Promise<{ winnerFarms: string[]; auctionHostingEndDate: string }> => {
  const farmAuctionContract = getFarmAuctionContract()
  const currentAuctionId = await farmAuctionContract.currentAuctionId()
  // @ts-ignore fix chainId support
  const [auctionData, [auctionBidders]] = await multicallv2({
    abi: farmAuctionAbi,
    calls: [
      {
        address: farmAuctionContract.address,
        name: 'auctions',
        params: [currentAuctionId],
      },
      {
        address: farmAuctionContract.address,
        name: 'viewBidsPerAuction',
        params: [currentAuctionId, 0, 500],
      },
    ],
    chainId,
    options: { requireSuccess: false },
  })
  const blocksSinceEnd = currentBlock - auctionData.endBlock.toNumber()
  if (blocksSinceEnd > 0) {
    const secondsSinceEnd = blocksSinceEnd * BITGERT_BLOCK_TIME
    if (secondsSinceEnd > FARM_AUCTION_HOSTING_IN_SECONDS) {
      return { winnerFarms: [], auctionHostingEndDate: null }
    }
    const sortedBidders = sortAuctionBidders(auctionBidders)
    const leaderboardThreshold = ethersToBigNumber(auctionData.leaderboardThreshold)
    const winnerFarms = sortedBidders
      .filter((bidder) => bidder.amount.gt(leaderboardThreshold))
      .map((bidder) => bidder.lpAddress)
    const currentAuctionEndDate = sub(new Date(), { seconds: secondsSinceEnd })
    return {
      winnerFarms,
      auctionHostingEndDate: add(currentAuctionEndDate, {
        seconds: FARM_AUCTION_HOSTING_IN_SECONDS,
      }).toJSON(),
    }
  }

  return { winnerFarms: [], auctionHostingEndDate: null }
}

export default fetchFarmsWithAuctions
