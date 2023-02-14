import React from 'react'
import { Text } from '@pancakeswap/uikit'

const CurrentLaunchpadCardProgresBar = () => {
  return (
    <>
      <Text marginBottom={'2px'} color="textSubtle" fontSize="15px" textAlign="left">
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
    </>
  )
}

export default CurrentLaunchpadCardProgresBar
