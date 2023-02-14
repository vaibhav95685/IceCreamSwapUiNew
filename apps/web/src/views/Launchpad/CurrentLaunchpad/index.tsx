import React, { useState } from 'react'
import Head from 'next/head'
import { AppBody } from 'components/App'
import { AtomBox } from '@pancakeswap/ui'
import { useMemo } from 'react'
import { Text, Flex , Card } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Divider from 'views/Farms/components/Divider'

const LabelWrapper = styled.div`
  > ${Text} {
    font-size: 12px;
  }
`
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
        <Text marginBottom={'10px'} color="textSubtle" fontSize="19px" textAlign="left">
          {' '}
          Crazy Monkey
        </Text>
        <Text marginBottom={'0px'} color="textSubtle" fontSize="21px" textAlign="left">
          {' '}
          Fair Launch - Max buy 0.35 BU...
        </Text>
        <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
          {' '}
          Soft
        </Text>
        <Text marginBottom={'10px'} color="textSubtle" fontSize="15px" textAlign="left">
          {' '}
          5 BUSD
        </Text>
        <Text marginBottom={'2px'} color="textSubtle" fontSize="15px" textAlign="left">
          {' '}
          Progress (107.87%)
        </Text>
        <progress
          value={70}
          max="100"
          style={{
            width: '100%',
            height: '10px',
            borderRadius: '10px',
            backgroundColor: '#e9ecef',
          }}
        >
          <div
            style={{
              width: `${70}%`,
              height: '100%',
              backgroundColor: '#007bff',
              borderRadius: '10px',
              transition: 'width 0.2s ease-in-out',
            }}
          />
        </progress>
      </CurrentLaunchpadCardInnerContainer>
    </StyledCard>
  )
}

export default CurrentLaunchpadCard
