import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { Text, Farm as FarmUI, InputBox, DateInput, Checkbox, Flex } from '@pancakeswap/uikit'
import styled from 'styled-components'

const LabelWrapper = styled.div`
  > ${Text} {
    font-size: 12px;
  }
`
const Container = styled.div`
   {
  }
`

const UseVesting = () => {
  const [showText, setShowText] = useState(false)
  const [showText1, setShowText1] = useState(false)
  const { pathname, query: urlQuery } = useRouter()
  const [_query, setQuery] = useState('')
  const normalizedUrlSearch = useMemo(() => (typeof urlQuery?.search === 'string' ? urlQuery.search : ''), [urlQuery])
  const query = normalizedUrlSearch && !_query ? normalizedUrlSearch : _query

  const myFunction = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.value
  }

  return (
    <Container>
      <Text marginBottom={'15px'} marginTop={'5px'} color="textSubtle" fontSize="17px" textAlign="left">
        For Teams Token
      </Text>
      <Flex alignItems="center">
        <Checkbox onClick={() => setShowText(!showText)} name="own-address" type="checkbox" scale="sm" />
        <Text ml="10px" style={{ userSelect: 'none' }}>
          Use vesting ?
        </Text>
      </Flex>
      {showText && (
        <Container id="step-2">
          <Container>
            <Container>
              <Text marginBottom={'5px'} marginTop={'20px'} color="textSubtle" fontSize="17px" textAlign="left">
                For Teams Token
              </Text>

              <Container>
                <Container>
                  <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
                    TGE Date
                  </Text>
                  <LabelWrapper>
                    <DateInput onChange={myFunction} placeholder="TGE Date (UTC time)*" />
                  </LabelWrapper>
                </Container>

                <Container>
                  <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
                    TGE Percent
                  </Text>
                  <LabelWrapper>
                    <InputBox onChange={myFunction} placeholder=" TGE Percent" />
                  </LabelWrapper>
                </Container>
              </Container>

              <Container>
                <Container>
                  <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
                    Cycle (days)*
                  </Text>
                  <LabelWrapper>
                    <InputBox onChange={myFunction} placeholder=" Cycle (days)*" />
                  </LabelWrapper>
                </Container>

                <Container>
                  <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
                    Cycle Release
                  </Text>
                  <LabelWrapper>
                    <InputBox onChange={myFunction} placeholder="Cycle Release Percent*" />
                  </LabelWrapper>
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
      )}

      <Text marginBottom={'15px'} marginTop={'30px'} color="textSubtle" fontSize="17px" textAlign="left">
        For Investor
      </Text>
      <Flex marginBottom={'25px'} alignItems="center">
        <Checkbox onClick={() => setShowText1(!showText1)} name="own-address" type="checkbox" scale="sm" />
        <Text ml="10px" style={{ userSelect: 'none' }}>
          Use vesting ?
        </Text>
      </Flex>
      {showText1 && (
        <Container id="step-2">
          <Container>
            <Container>
              <Text marginBottom={'5px'} marginTop={'20px'} color="textSubtle" fontSize="17px" textAlign="left">
                For Investor
              </Text>
              <Container>
                <Container>
                  <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
                    TGE Date
                  </Text>
                  <LabelWrapper>
                    <DateInput onChange={myFunction} placeholder="TGE Date (UTC time)*" />
                  </LabelWrapper>
                </Container>

                <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
                  TGE Percent
                </Text>
                <LabelWrapper>
                  <InputBox onChange={myFunction} placeholder=" TGE Percent" />
                </LabelWrapper>
              </Container>

              <Container>
                <Container>
                  <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
                    Cycle (days)*
                  </Text>
                  <LabelWrapper>
                    <InputBox onChange={myFunction} placeholder=" Cycle (days)*" />
                  </LabelWrapper>
                </Container>

                <Container>
                  <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
                    Cycle Release
                  </Text>
                  <LabelWrapper>
                    <InputBox onChange={myFunction} placeholder="Cycle Release Percent*" />
                  </LabelWrapper>
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
      )}
    </Container>
  )
}

export default UseVesting
