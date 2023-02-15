import React from 'react'
import styled from 'styled-components'
import CurrentLaunchpadCard from './components/Card'

const ControlContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;

  // justify-content: space-between;
  justify-content: space-around;
  flex-direction: column;
  margin-bottom: 32px;

  ${({ theme }) => theme.mediaQueries} {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 16px 32px;
    margin-bottom: 0;
    margin-left: auto;
    margin-right: auto;
  }
`

const CurrentLaunchpad = () => {
  return (
    <>
      <ControlContainer>
        <CurrentLaunchpadCard />
        <CurrentLaunchpadCard />
        <CurrentLaunchpadCard />
        <CurrentLaunchpadCard />
        <CurrentLaunchpadCard />
        <CurrentLaunchpadCard />
        <CurrentLaunchpadCard />
        <CurrentLaunchpadCard />
      </ControlContainer>
    </>
  )
}

export default CurrentLaunchpad
