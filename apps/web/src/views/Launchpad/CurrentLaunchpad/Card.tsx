import React, { useState } from 'react'
import { useMemo } from 'react'
import { Text, Flex, Card } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Header from './Components/Header'
import ProgresBar from './Components/ProgresBar'
import Liquidity from './Components/Liquidity'
import LockupTime from './Components/LockupTime'
import Bottom from './Components/Bottom'

const StyledCard = styled(Card)`
  align-self: baseline;
  max-width: 100%;
  margin: 0 0 24px 0;
  ${({ theme }) => theme.mediaQueries.sm} {
    max-width: 350px;
    margin: 0 12px 46px;
   
  }
`

const CurrentLaunchpadCardInnerContainer = styled(Flex)`
  flex-direction: column;
  justify-content: space-around;
  padding: 24px;
  width: fixed;
`





const CurrentLaunchpadCard = () => {
  const { pathname, query: urlQuery } = useRouter()
  const [_query, setQuery] = useState('')
  const normalizedUrlSearch = useMemo(() => (typeof urlQuery?.search === 'string' ? urlQuery.search : ''), [urlQuery])
  const query = normalizedUrlSearch && !_query ? normalizedUrlSearch : _query
  const [showTooltip, setShowTooltip] = useState(false)
  const handleChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }
  return (
   
    <StyledCard>
      <CurrentLaunchpadCardInnerContainer>
        <Header />
        <Text marginBottom={'0px'} color="textSubtle" fontSize="21px" textAlign="left">
         
          Fair Launch - Max buy 0.35 BU...
        </Text>
        <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
        
          Soft
        </Text>
        <Text marginBottom={'10px'} color="textSubtle" fontSize="15px" textAlign="left">
         
          5 BUSD
        </Text>
        <ProgresBar />
        <Liquidity />
        <LockupTime />
        <Bottom />
      </CurrentLaunchpadCardInnerContainer>
    </StyledCard>
  
  )
}

export default CurrentLaunchpadCard
