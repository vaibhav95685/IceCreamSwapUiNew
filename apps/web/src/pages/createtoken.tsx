import React, { useState } from 'react';
import Head from 'next/head';
// import Dropdown2 from './Dropdown2';
import { AppBody } from 'components/App'
import {
  AtomBox

} from '@pancakeswap/ui';
import { useMemo } from 'react'
import {
  Text,
  Farm as FarmUI,
  SearchInput,
  Select,
  PageHeader,
  Heading

} from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useRouter } from 'next/router';
import Divider from 'views/Farms/components/Divider';




const LabelWrapper = styled.div`
  > ${Text} {
    font-size: 12px;
  }
`



const MultiStepForm = () => {


  const { pathname, query: urlQuery } = useRouter()
  const [_query, setQuery] = useState('')
  const normalizedUrlSearch = useMemo(() => (typeof urlQuery?.search === 'string' ? urlQuery.search : ''), [urlQuery])
  const query = normalizedUrlSearch && !_query ? normalizedUrlSearch : _query
  const [showTooltip, setShowTooltip] = useState(false);
  const handleChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }
  return (
    <PageHeader>
      <AppBody>
        <div>
          <Head>

          </Head>

          <div className="maincontainer"  >
            <div>


              <div>
                <AtomBox width="full" alignItems="center" flexDirection="column" padding="24px" borderBottom="1">
                  <Heading marginBottom={"5px"} textAlign={"center"} as="h2"> Create Token</Heading>
                  <Text textAlign={"center"} color="textSubtle" fontSize="17px">
                    You can create the token from here !
                  </Text>
                </AtomBox>

                <LabelWrapper style={{ marginTop: "20px" }}>
                  <Select
                    options={[
                      {
                        label: ('Standard Token'),
                        value: 'Standard Token',
                      },
                      {
                        label: ('Liquidity Generator Token'),
                        value: 'Liquidity Generator Token',
                      },
                      {
                        label: ('Baby Token'),
                        value: 'Baby Token',
                      },
                      {
                        label: ('Buyback Baby Token'),
                        value: 'Buyback Baby Token',
                      },

                    ]}

                  />
                </LabelWrapper>


              </div>
              <div className="inputdiv"  >
                <Text marginBottom={"10px"} color="textSubtle" fontSize="17px" textAlign="left">
                  Name
                </Text>
                <LabelWrapper>
                  <SearchInput onChange={handleChangeQuery} placeholder="Name" />


                </LabelWrapper>
              </div>
              <div className="inputdiv"   >
                <Text marginBottom={"10px"} color="textSubtle" fontSize="17px" textAlign="left">
                  Symbol
                </Text>
                <LabelWrapper>
                  <SearchInput onChange={handleChangeQuery} placeholder="Symbol" />
                </LabelWrapper>
              </div>
              <div className="inputdiv"   >
                <Text marginBottom={"10px"} color="textSubtle" fontSize="17px" textAlign="left">
                  Decimals
                </Text>

                <LabelWrapper>
                  <SearchInput onChange={handleChangeQuery} placeholder="Decimals" />
                </LabelWrapper>
              </div>
              <div className="inputdiv"  >
                <Text marginBottom={"10px"} color="textSubtle" fontSize="17px" textAlign="left">
                  Total Supply
                </Text>


                <LabelWrapper>
                  <SearchInput onChange={handleChangeQuery} placeholder="Total Supply" />
                </LabelWrapper>


              </div>

            </div>

            <Divider margin="0px" />
            <div className="buttondiv">
              <button className="nextBtn btn-lg pull-left bottombutton" >Create Token</button>
            </div>


          </div>
        </div>
      </AppBody>
    </PageHeader>
  );
};



export default MultiStepForm;