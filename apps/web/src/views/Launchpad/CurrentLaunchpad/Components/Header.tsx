import React from 'react'
import { Text, Flex } from '@pancakeswap/uikit'

const CurrentLaunchpadCardHeader = () => {
  return (
    <>
      <Flex justifyContent="space-between" marginTop="5px">
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
        <Text color="green">Sale Live</Text>
      </Flex>
      <Text marginBottom={'10px'} color="textSubtle" fontSize="19px" textAlign="left">
        Crazy Monkey
      </Text>
    </>
  )
}

export default CurrentLaunchpadCardHeader
