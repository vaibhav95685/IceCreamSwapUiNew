import { useContext } from 'react'
import { SUPPORT_FARMS } from 'config/constants/supportChains'
import { FarmsPageLayout, FarmsContext } from 'views/CurrentLaunchpad'
import FarmCard from 'views/CurrentLaunchpad/components/FarmCard/FarmCard'
import { getDisplayApr } from 'views/CurrentLaunchpad/components/getDisplayApr'
import { usePriceCakeBusd } from 'state/farms/hooks'
import { useWeb3React } from '@pancakeswap/wagmi'
import {

  PageHeader

} from '@pancakeswap/uikit'
import ProxyFarmContainer, {
  YieldBoosterStateContext,
} from 'views/CurrentLaunchpad/components/YieldBooster/components/ProxyFarmContainer'

const ProxyFarmCardContainer = ({ farm }) => {
  const { account } = useWeb3React()
  const cakePrice = usePriceCakeBusd()

  const { proxyFarm, shouldUseProxyFarm } = useContext(YieldBoosterStateContext)
  const finalFarm = shouldUseProxyFarm ? proxyFarm : farm

  return (
   
    <FarmCard
      key={finalFarm.pid}
      farm={finalFarm}
      displayApr={getDisplayApr(finalFarm.apr, finalFarm.lpRewardsApr)}
      cakePrice={cakePrice}
      account={account}
      removed={false}
    />
    
  )
}

const FarmsPage = () => {
  const { account } = useWeb3React()
  const { chosenFarmsMemoized } = useContext(FarmsContext)
  const cakePrice = usePriceCakeBusd()
  return (
    <>
    
      {chosenFarmsMemoized.map((farm) =>
        farm.boosted ? (
          <ProxyFarmContainer farm={farm} key={farm.pid}>
            <ProxyFarmCardContainer farm={farm} />
          </ProxyFarmContainer>
        ) : (
          <FarmCard
            key={farm.pid}
            farm={farm}
            displayApr={getDisplayApr(farm.apr, farm.lpRewardsApr)}
            cakePrice={cakePrice}
            account={account}
            removed={false}
          />
        ),
      )}
    </>
  )
}

FarmsPage.Layout = FarmsPageLayout

FarmsPage.chains = SUPPORT_FARMS

export default FarmsPage
