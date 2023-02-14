import React from 'react'
import { Text, Flex } from '@pancakeswap/uikit'
import Link from 'next/link'

const CurrentLaunchpadCardBottom = () => {
  return (
    <>
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

          <Link href={'/detail'}>
            <button
              type="button"
              style={{
                backgroundColor: '#f8567f',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '15px',
              }}
            >
              View
            </button>
          </Link>
        </Flex>
      </Flex>
    </>
  )
}

export default CurrentLaunchpadCardBottom
