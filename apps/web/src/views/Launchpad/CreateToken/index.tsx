import React, { useState } from 'react'
import { AppBody } from 'components/App'
import { AtomBox } from '@pancakeswap/ui'
import { useMemo } from 'react'
import { Text, Farm as FarmUI, SearchInput, Select, PageHeader, Heading } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Divider from 'views/Farms/components/Divider'

const LabelWrapper = styled.div`
  > ${Text} {
    font-size: 12px;
  }
`
const Container = styled.div`
   {
  }
`

const MainContainer = styled.div`
   {
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    width: 85%;
  }
`

const InputDiv = styled.div`
   {
    margin-bottom: 15px;
    margin-top: 15px;
  }
`
const ButtonDiv = styled.div`
   {
    margin-top: 30px;
    padding-bottom: 100px;
  }
`

const CreateToken = () => {
  const { pathname, query: urlQuery } = useRouter()
  const [_query, setQuery] = useState('')
  const normalizedUrlSearch = useMemo(() => (typeof urlQuery?.search === 'string' ? urlQuery.search : ''), [urlQuery])
  const query = normalizedUrlSearch && !_query ? normalizedUrlSearch : _query
  const [showTooltip, setShowTooltip] = useState(false)
  const handleChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }
  return (
    <PageHeader>
      <AppBody>
        <MainContainer>
          <Container>
            <Container>
              <AtomBox width="full" alignItems="center" flexDirection="column" padding="24px" borderBottom="1">
                <Heading marginBottom={'5px'} textAlign={'center'} as="h2">
                  {' '}
                  Create Token
                </Heading>
                <Text textAlign={'center'} color="textSubtle" fontSize="17px">
                  You can create the token from here !
                </Text>
              </AtomBox>

              <LabelWrapper style={{ marginTop: '20px' }}>
                <Select
                  options={[
                    {
                      label: 'Standard Token',
                      value: 'Standard Token',
                    },
                    {
                      label: 'Liquidity Generator Token',
                      value: 'Liquidity Generator Token',
                    },
                    {
                      label: 'Baby Token',
                      value: 'Baby Token',
                    },
                    {
                      label: 'Buyback Baby Token',
                      value: 'Buyback Baby Token',
                    },
                  ]}
                />
              </LabelWrapper>
            </Container>
            <InputDiv>
              <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
                Name
              </Text>
              <LabelWrapper>
                <SearchInput onChange={handleChangeQuery} placeholder="Name" />
              </LabelWrapper>
            </InputDiv>
            <InputDiv>
              <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
                Symbol
              </Text>
              <LabelWrapper>
                <SearchInput onChange={handleChangeQuery} placeholder="Symbol" />
              </LabelWrapper>
            </InputDiv>
            <InputDiv>
              <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
                Decimals
              </Text>

              <LabelWrapper>
                <SearchInput onChange={handleChangeQuery} placeholder="Decimals" />
              </LabelWrapper>
            </InputDiv>
            <InputDiv>
              <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
                Total Supply
              </Text>

              <LabelWrapper>
                <SearchInput onChange={handleChangeQuery} placeholder="Total Supply" />
              </LabelWrapper>
            </InputDiv>
          </Container>

          <Divider margin="0px" />
          <ButtonDiv>
            <button className="nextBtn bottombutton">Create Token</button>
          </ButtonDiv>
        </MainContainer>
      </AppBody>
    </PageHeader>
  )
}

export default CreateToken
