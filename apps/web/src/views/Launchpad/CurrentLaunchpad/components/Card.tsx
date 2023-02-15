import React, { useState } from 'react'
import { useMemo } from 'react'
import { Text, Flex, Card } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Link from 'next/link'

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
const ProgresBar = styled.div`
   {
    width: 70%;
    height: 100%;
    background-color: #007bff;
    border-radius: 10px;
    transition: width 0.2s ease-in-out;
  }
`
const LaunchpadLogo = styled.div`
   {
    width: 40px;
    height: 40px;
   
  }
`

const CurrentLaunchpadCard = () => {
  const { pathname, query: urlQuery } = useRouter()
  const [_query, setQuery] = useState('')
  const normalizedUrlSearch = useMemo(() => (typeof urlQuery?.search === 'string' ? urlQuery.search : ''), [urlQuery])
  const query = normalizedUrlSearch && !_query ? normalizedUrlSearch : _query
 
  
  return (
    <StyledCard>
      <CurrentLaunchpadCardInnerContainer>
        <Flex justifyContent="space-between" marginTop="5px">
          <LaunchpadLogo>
          <img src='https://photos.pinksale.finance/file/pinksale-logo-upload/1676403541600-81c759e1e8c327664374fc652ed436b1.png' alt='token logo'/>
          </LaunchpadLogo>
          
          <Text color="green">Sale Live</Text>
        </Flex>
        <Text marginBottom={'10px'} color="textSubtle" fontSize="19px" textAlign="left">
          Crazy Monkey
        </Text>
        <Text marginBottom={'0px'} color="textSubtle" fontSize="21px" textAlign="left">
          Fair Launch - Max buy 0.35 BU...
        </Text>
        <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
          Soft
        </Text>
        <Text marginBottom={'10px'} color="textSubtle" fontSize="15px" textAlign="left">
          5 BUSD
        </Text>
        <Text marginBottom={'2px'} color="textSubtle" fontSize="15px" textAlign="left">
          Progress (107.87%)
        </Text>
        
        <progress value={70} max="100"  className="ProgressBar">
          <ProgresBar />
        </progress>
       
        <Flex justifyContent="space-between" marginTop="10px">
          <Text>Liquidity:</Text>
          <Text>67%</Text>
        </Flex>
        <Flex justifyContent="space-between" marginTop="10px">
          <Text>Lokup Time:</Text>
          <Text>66666666 minutes</Text>
        </Flex>
        <Flex justifyContent="space-between" marginTop="10px">
          <Text>Sales End in:</Text>
          <Flex>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="37"
              fill="currentColor"
              className="bi bi-heart-fill"
              viewBox="0 0 16 16"
              style={{ marginRight: '15px' }}
            >
              <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
            </svg>

            <Link href={'/launchpad-detail'}>
              <button type="button" className="CurrentLaunchpadButton">
                View
              </button>
            </Link>
          </Flex>
        </Flex>
      </CurrentLaunchpadCardInnerContainer>
    </StyledCard>
  )
}

export default CurrentLaunchpadCard
