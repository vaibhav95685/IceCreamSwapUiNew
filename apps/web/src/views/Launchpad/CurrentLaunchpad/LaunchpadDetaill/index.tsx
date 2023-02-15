import React, { useState } from 'react'
import Link from 'next/link'
import { useMemo } from 'react'
import { AppBody } from 'components/App'
import Divider from 'views/Farms/components/Divider'
import { Text, Farm as FarmUI, SearchInput, PageHeader } from '@pancakeswap/uikit'
import { AtomBox } from '@pancakeswap/ui'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { PieChart, Pie, Legend, Sector, Cell, ResponsiveContainer } from 'recharts'

const LabelWrapper = styled.div`
  > ${Text} {
    font-size: 12px;
  }
`
const LogoContainer = styled.div`
   {
    display: flex;
    justify-content: flex-start;
    margin-top: 25px;
    margin-bottom: 20px;
  }
`
const MainContainer = styled.div`
   {
    padding-top: 50px;
    padding-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    width: 85%;
  }
`
const Video = styled.div`
   {

padding-bottom: 15px;
  }
`
const DivContainer = styled.div`
   {
    // margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px;
  }
`
const Value = styled.h2`
   {
    // margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px;
  }
`
const Button = styled.div`
   {
    margin-top: 30px;
    margin-left: 12px;
  }
`
const RowDivider = styled.div`
   {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`
const Container = styled.div`
   {
  }
`
const InputDiv = styled.div`
   {
    margin-bottom: 15px;
    margin-top: 15px;
  }
`

const LaunchpadDetail = () => {
  const { pathname, query: urlQuery } = useRouter()
  const [_query, setQuery] = useState('')
  const normalizedUrlSearch = useMemo(() => (typeof urlQuery?.search === 'string' ? urlQuery.search : ''), [urlQuery])
  const query = normalizedUrlSearch && !_query ? normalizedUrlSearch : _query

  const handleChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const data = [
    { name: 'Total Supply', value: 1000000000 },
    { name: 'Presale', value: 369000000 },
    { name: 'Liquidity', value: 173555550 },
  ]

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28']

  const RADIAN = Math.PI / 180
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  return (
    <PageHeader>
      <AppBody>
        <MainContainer>
          <AtomBox width="full" alignItems="center" flexDirection="column" padding="24px" borderBottom="1">
            <Text
              marginTop={'5px'}
              fontWeight={900}
              marginBottom={'5px'}
              color="textSubtle"
              fontSize="30px"
              textAlign="left"
            >
              AI District Icecreamswap
            </Text>
          </AtomBox>

          <LogoContainer>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="bi bi-telegram"
              viewBox="0 0 16 16"
              style={{ marginRight: '10px' }}
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.153.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.154.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="bi bi-twitter"
              viewBox="0 0 16 16"
              style={{ marginRight: '10px' }}
            >
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              fill="currentColor"
              className="bi bi-heart-fill"
              viewBox="0 0 16 16"
              style={{ marginRight: '10px' }}
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.157-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.157 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.159.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              fill="currentColor"
              className="bi bi-heart-fill"
              viewBox="0 0 16 16"
              style={{ marginRight: '10px' }}
            >
              <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              fill="currentColor"
              className="bi bi-youtube"
              viewBox="0 0 16 16"
            >
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
            </svg>
          </LogoContainer>
          {/* <Text marginBottom={'15px'} color="textSubtle" fontSize="17px" textAlign="left">
            AI District is the DAO for AI innovation, community-driven exploration and investment in the future of AI,
            We guide genrations X, Y and Z through AI and learn it together. AI Bots AI Incubator AI Community HUB
            Stacking DAO Voting And more No mint function! Tax is always at 4% or less! Tax can't be raised above 4%!
            Trade can't be stopped once started!
          </Text> */}

          <>
            <ResponsiveContainer width={320} height={320}>
              <PieChart width={400} height={400}>
                <Legend layout="horizontal" verticalAlign="top" />
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </>

          <DivContainer>
            <Text color="textSubtle" fontSize="15px" textAlign="left">
              Total Supply
            </Text>
            <Text>1,000,000,000 AID</Text>
          </DivContainer>
          <DivContainer>
            <Text color="textSubtle" fontSize="15px" textAlign="left">
              Tokens For Presale
            </Text>
            <Text>369,000,000 AID</Text>
          </DivContainer>
          <DivContainer>
            <Text color="textSubtle" fontSize="15px" textAlign="left">
              Tokens For Liquidity
            </Text>
            <Text>173,555,550 AID</Text>
          </DivContainer>
        </MainContainer>
      </AppBody>

      
      <AppBody>
        <MainContainer>
        <Video>
        <iframe width="540" height="315" src="https://www.youtube.com/embed/2JT1dRPOBA8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </Video>
        <Container>
            <DivContainer>
              <Text color="textSubtle" fontSize="15px" textAlign="left">
                Presale Address
              </Text>
              <Text color="textSubtle" fontSize="15px" textAlign="left">
                0x31BoD123455gF2
              </Text>
            </DivContainer>
            <DivContainer>
              <Text color="textSubtle" fontSize="15px" textAlign="left">
                Token Name
              </Text>
              <Text>AI District</Text>
            </DivContainer>
            <DivContainer>
              <Text color="textSubtle" fontSize="15px" textAlign="left">
                Token Symbol
              </Text>
              <Text>AID</Text>
            </DivContainer>
            {/* <DivContainer>
                  <Text color="textSubtle" fontSize="15px" textAlign="left">
                    Token Decimal
                  </Text>
                  <Text>18</Text>
                </DivContainer> */}
            <DivContainer>
              <Text color="textSubtle" fontSize="15px" textAlign="left">
                Token Address
              </Text>
              <Container>
                <Text textAlign="right">0x31BoD1234555655544ad</Text>
                <Text color="blue" fontSize="15px" textAlign="right">
                  (Do not send BNB to the token address)
                </Text>
              </Container>
            </DivContainer>

            <DivContainer>
              <Text color="textSubtle" fontSize="15px" textAlign="left">
                Presale rate
              </Text>
              <Text>1 BNB = 1,230,000 AID</Text>
            </DivContainer>
            {/* <DivContainer>
                  <Text color="textSubtle" fontSize="15px" textAlign="left">
                    First Release For Presale
                  </Text>
                  <Text>50%</Text>
                </DivContainer> */}
            <DivContainer>
              <Text color="textSubtle" fontSize="15px" textAlign="left">
                Listing Rate
              </Text>
              <Text>1 BNB = 1,157,500 AID</Text>
            </DivContainer>
            <DivContainer>
              <Text color="textSubtle" fontSize="15px" textAlign="left">
                Initial Market Cap (estimate)
              </Text>
              <Text>$283,801</Text>
            </DivContainer>
            <DivContainer>
              <Text color="textSubtle" fontSize="15px" textAlign="left">
                Softcap
              </Text>
              <Text>75 BNB</Text>
            </DivContainer>
            <DivContainer>
              <Text color="textSubtle" fontSize="15px" textAlign="left">
                Hardcap
              </Text>
              <Text>300 BNB</Text>
            </DivContainer>
            <DivContainer>
              <Text color="textSubtle" fontSize="15px" textAlign="left">
                Unsold Token
              </Text>
              <Text>Refund</Text>
            </DivContainer>
            <DivContainer>
              <Text color="textSubtle" fontSize="15px" textAlign="left">
                Presale Start Time
              </Text>
              {/* <progress value={70} max="100">
        </progress> */}
              <Text>2023.02.14 12:00 (UTC)</Text>
            </DivContainer>
            <DivContainer>
              <Text color="textSubtle" fontSize="15px" textAlign="left">
                Presale End Time
              </Text>
              <Text>2023.02.17 18:00 (UTC)</Text>
            </DivContainer>
            {/* <DivContainer>
                  <Text color="textSubtle" fontSize="15px" textAlign="left">
                    Listing On
                  </Text>
                  <Text>Pancakeswap</Text>
                </DivContainer>
                <DivContainer>
                  <Text color="textSubtle" fontSize="15px" textAlign="left">
                    Liquidity
                  </Text>
                  <Text>51%</Text>
                </DivContainer>
                <DivContainer>
                  <Text color="textSubtle" fontSize="15px" textAlign="left">
                    Liquidity lockup time
                  </Text>
                  <Text>365 days after pool ends</Text>
                </DivContainer> */}
          </Container>

          <InputDiv>
            <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
              Amount
            </Text>
            <LabelWrapper>
              <SearchInput onChange={handleChangeQuery} placeholder="Amount" />
            </LabelWrapper>
          </InputDiv>

          <Divider margin="0px" />
          <RowDivider>
            <Button>
              <Link href={'/current-launchpad'}>
                <button className="bottomgreybutton">Back</button>
              </Link>
            </Button>
            <Button>
              <button className="bottompinkbutton">Buy</button>
            </Button>
          </RowDivider>
        </MainContainer>
      </AppBody>
    </PageHeader>
  )
}
export default LaunchpadDetail
