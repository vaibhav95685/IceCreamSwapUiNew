import { useTranslation } from '@pancakeswap/localization'
import { Card, Farm as FarmUI, Flex, Skeleton, Text, ExpandableSectionButton } from '@pancakeswap/uikit'
import BigNumber from 'bignumber.js'
import { multiChainPaths } from 'state/info/constant'
import { BASE_ADD_LIQUIDITY_URL } from 'config'
import { useCallback, useState } from 'react'
import styled from 'styled-components'
import { getBlockExploreLink } from 'utils'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { useActiveChainId } from 'hooks/useActiveChainId'
import { FarmWithStakedValue } from '../types'
import ApyButton from './ApyButton'
import CardActionsContainer from './CardActionsContainer'
import CardHeading from './CardHeading'

import BoostedApr from '../YieldBooster/components/BoostedApr'

const { DetailsSection } = FarmUI.FarmCard

const StyledCard = styled(Card)`
  align-self: baseline;
  max-width: 100%;
  margin: 0 0 24px 0;
  ${({ theme }) => theme.mediaQueries.sm} {
    max-width: 350px;
    margin: 0 12px 46px;
  }
`

const FarmCardInnerContainer = styled(Flex)`
  flex-direction: column;
  justify-content: space-around;
  padding: 24px;
`

const ExpandingWrapper = styled.div`
  padding: 24px;
  border-top: 2px solid ${({ theme }) => theme.colors.cardBorder};
  overflow: hidden;
`

interface FarmCardProps {
  farm: FarmWithStakedValue
  displayApr: string
  removed: boolean
  cakePrice?: BigNumber
  account?: string
  originalLiquidity?: BigNumber
}

const FarmCard: React.FC<React.PropsWithChildren<FarmCardProps>> = ({
  farm,
  displayApr,
  removed,
  cakePrice,
  account,
  originalLiquidity,
}) => {
  const { t } = useTranslation()
  const { chainId } = useActiveChainId()

  const [showExpandableSection, setShowExpandableSection] = useState(false)

  const liquidity =
    farm?.liquidity && originalLiquidity?.gt(0) ? farm.liquidity.plus(originalLiquidity) : farm.liquidity

  const totalValueFormatted =
    liquidity && liquidity.gt(0)
      ? `$${liquidity.toNumber().toLocaleString(undefined, { maximumFractionDigits: 0 })}`
      : ''

  const lpLabel = farm.lpSymbol && farm.lpSymbol.toUpperCase().replace('PANICE', '')
  const earnLabel = farm.dual ? farm.dual.earnLabel : t('66666666 minutes')

  const liquidityUrlPathParts = getLiquidityUrlPathParts({
    quoteTokenAddress: farm.quoteToken.address,
    tokenAddress: farm.token.address,
    chainId,
  })
  const addLiquidityUrl = `${BASE_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`
  const { lpAddress } = farm
  const isPromotedFarm = farm.token.symbol === 'sale live'
  const { stakedBalance, proxy, tokenBalance } = farm.userData

  const toggleExpandableSection = useCallback(() => {
    setShowExpandableSection((prev) => !prev)
  }, [])

  return (
    <StyledCard isActive={isPromotedFarm}>
      <FarmCardInnerContainer>
        <CardHeading
          lpLabel={lpLabel}
          multiplier={farm.multiplier}
          isCommunityFarm={farm.isCommunity}
          token={farm.token}
          quoteToken={farm.quoteToken}
          boosted={farm.boosted}
          isStable={farm.isStable}
        />
        
        <Text marginBottom={"10px"} color="textSubtle" fontSize="19px" textAlign="left"> Crazy Monkey</Text>
        <Text marginBottom={"0px"} color="textSubtle" fontSize="21px" textAlign="left"> Fair Launch - Max buy 0.35 BU...</Text>
        <Text marginBottom={"10px"} color="textSubtle" fontSize="17px" textAlign="left"> Soft</Text>
        <Text marginBottom={"10px"} color="textSubtle" fontSize="15px" textAlign="left"> 5 BUSD</Text>
        <Text marginBottom={"2px"} color="textSubtle" fontSize="15px" textAlign="left"> Progress (107.87%)</Text>
        <progress value={70} max="100" style={{
  width: '100%',
  height: '10px',
  borderRadius: '10px',
  backgroundColor: '#e9ecef'
}}><div style={{
    width: `${70}%`,
    height: '100%',
    backgroundColor: '#007bff',
    borderRadius: '10px',
    transition: 'width 0.2s ease-in-out',
  }} /></progress>
       
        {!removed && (
          <Flex justifyContent="space-between" alignItems="center">
            <Text>{t('Liquidity')}:</Text>
            <Text bold style={{ display: 'flex', alignItems: 'center' }}>
              {farm.apr ? (
                <>
                  {farm.boosted ? (
                    <BoostedApr
                      mr="4px"
                      lpRewardsApr={farm.lpRewardsApr}
                      apr={farm.apr}
                      pid={farm?.pid}
                      lpTotalSupply={farm.lpTotalSupply}
                      userBalanceInFarm={
                        (stakedBalance.plus(tokenBalance).gt(0)
                          ? stakedBalance?.plus(tokenBalance)
                          : proxy?.stakedBalance.plus(proxy?.tokenBalance)) ?? new BigNumber(0)
                      }
                    />
                  ) : null}
                  <ApyButton
                    variant="text-and-button"
                    pid={farm.pid}
                    lpTokenPrice={farm.lpTokenPrice}
                    lpSymbol={farm.lpSymbol}
                    multiplier={farm.multiplier}
                    lpLabel={lpLabel}
                    addLiquidityUrl={addLiquidityUrl}
                    cakePrice={cakePrice}
                    apr={farm.apr}
                    displayApr={displayApr}
                    lpRewardsApr={farm.lpRewardsApr}
                    strikethrough={farm.boosted}
                    useTooltipText
                    boosted={farm.boosted}
                  />
                </>
              ) : (
                <Skeleton height={24} width={80} />
              )}
            </Text>
          </Flex>
        )}
        <Flex justifyContent="space-between">
          <Text>{t('Lockup Time')}:</Text>
          <Text bold>{earnLabel}</Text>
        </Flex>

        <Flex justifyContent="space-between">
          <Text>{t('Sales End in')}:</Text>
          <Flex>
          <svg xmlns="http://www.w3.org/2000/svg"  width="37" height="37" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16" style={{marginRight:'15px'}}>
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>

          <button type="button" style={{
      backgroundColor: 'pink',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '15px',
    }}>
      View
    </button>
    </Flex>
        </Flex>
        {/* <CardActionsContainer
          farm={farm}
          lpLabel={lpLabel}
          account={account}
          addLiquidityUrl={addLiquidityUrl}
          displayApr={displayApr}
        /> */}
      </FarmCardInnerContainer>

      {/* <ExpandingWrapper>
        <ExpandableSectionButton onClick={toggleExpandableSection} expanded={showExpandableSection} /> */}
        {/* {showExpandableSection && (
          <DetailsSection
            removed={removed}
            scanAddressLink={getBlockExploreLink(lpAddress, 'address', chainId)}
            infoAddress={`/info${multiChainPaths[chainId]}/pools/${lpAddress}`}
            totalValueFormatted={totalValueFormatted}
            lpLabel={lpLabel}
            addLiquidityUrl={addLiquidityUrl}
            isCommunity={farm.isCommunity}
            auctionHostingEndDate={farm.auctionHostingEndDate}
          />
        )} */}
      {/* </ExpandingWrapper> */}
    </StyledCard>
  )
}

export default FarmCard
