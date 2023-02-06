import React, { useState } from 'react';
import Head from 'next/head';
import Dropdown2 from './Dropdown2';
import {  useMemo } from 'react'
import {
  Text,
  Farm as FarmUI,
  SearchInput,
  Select

} from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useRouter } from 'next/router'





const LabelWrapper = styled.div`
  > ${Text} {
    font-size: 12px;
  }
`

const handleChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
  setQuery(event.target.value)
}

const MultiStepForm = () => {

  const handleSortOptionChange = (option: OptionProps): void => {
    setSortOption(option.value)
  }
  const { pathname, query: urlQuery } = useRouter()
  const [_query, setQuery] = useState('')
  const normalizedUrlSearch = useMemo(() => (typeof urlQuery?.search === 'string' ? urlQuery.search : ''), [urlQuery])
  const query = normalizedUrlSearch && !_query ? normalizedUrlSearch : _query

  return (

    <div>
          <Head>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
</link>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
</link>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>


   
    </Head>
      <div style={{marginTop:"50px"}} className="container">
      <div   className="form-group">
      
                   
  <div>
  <LabelWrapper>
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
                // onOptionChange={handleSortOptionChange}
              />
            </LabelWrapper>
 </div>
 <div style={{ marginBottom:"15px", marginTop:"15px"}}  className="form-group">
 <Text marginBottom={"10px"} color="textSubtle" fontSize="17px" textAlign="left">
                    Name
                  </Text>
                    <LabelWrapper>
              <SearchInput onChange={handleChangeQuery} placeholder="Name" />
            </LabelWrapper>
                </div>
                <div style={{ marginBottom:"15px", marginTop:"15px"}}  className="form-group">
                <Text marginBottom={"10px"} color="textSubtle" fontSize="17px" textAlign="left">
                    Symbol
                  </Text>
                    <LabelWrapper>
              <SearchInput onChange={handleChangeQuery} placeholder="Symbol" />
            </LabelWrapper>
                </div>
                <div style={{ marginBottom:"15px", marginTop:"15px"}}  className="form-group">
                <Text marginBottom={"10px"} color="textSubtle" fontSize="17px" textAlign="left">
                    Decimals
                  </Text>
                    <LabelWrapper>
              <SearchInput onChange={handleChangeQuery} placeholder="Decimals" />
            </LabelWrapper>
                </div>
                <div style={{ marginBottom:"15px", marginTop:"15px"}}  className="form-group">
                <Text marginBottom={"10px"} color="textSubtle" fontSize="17px" textAlign="left">
                    Total Supply
                  </Text>
                    <LabelWrapper>
              <SearchInput onChange={handleChangeQuery} placeholder="Total Supply" />
            </LabelWrapper>
                </div>
             
 </div>


 <div style={{marginTop:"30px"}}>
    <button style={{ backgroundColor: '#f8567f', color: '#fff', padding: '0.5em 1em',  borderRadius: '0.25em',border: 'none' }} className="nextBtn btn-lg pull-left" >Create Token</button>
    </div>


      </div>
    </div>
  );
};



export default MultiStepForm;