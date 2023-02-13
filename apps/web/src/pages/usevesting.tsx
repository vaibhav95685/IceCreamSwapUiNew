import React, { useState } from "react";
import { useRouter } from 'next/router'
import {  useMemo } from 'react';
import {
    AtomBox
    
    } from '@pancakeswap/ui';
import {
    Text,
    Farm as FarmUI,
    SearchInput,
    DateInput,
    Select,
    Checkbox,
     Flex,
     PageHeader,
     Heading
  
  } from '@pancakeswap/uikit'
  import styled from 'styled-components'

  const LabelWrapper = styled.div`
  > ${Text} {
    font-size: 12px;
  }
`



const UseVesting = () => {


  const [showText, setShowText] = useState(false);
  const [showText1, setShowText1] = useState(false);
  const { pathname, query: urlQuery } = useRouter()
  const [_query, setQuery] = useState('')
  const normalizedUrlSearch = useMemo(() => (typeof urlQuery?.search === 'string' ? urlQuery.search : ''), [urlQuery])
  const query = normalizedUrlSearch && !_query ? normalizedUrlSearch : _query


  const handleChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }


  return (

    
    <div>
                
 <Text marginBottom={"15px"} marginTop={"5px"} color="textSubtle" fontSize="17px" textAlign="left">
              For Teams Token
              </Text>
      <Flex alignItems="center">
                    <Checkbox
                    onClick={() => setShowText(!showText)}
                      name="own-address"
                      type="checkbox"
                      scale="sm"
                    />
                    <Text ml="10px" style={{ userSelect: 'none' }}>
                      Use vesting ?
                    </Text>
                  </Flex>
      {showText && <div className="row setup-content" id="step-2">
        <div >
            <div >
        
 <Text marginBottom={"5px"} marginTop={"20px"} color="textSubtle" fontSize="17px" textAlign="left">
              For Teams Token
              </Text>
 
                  
 <div className="step2row1">
  
               <div className="step2row1left">
              
               <Text marginBottom={"10px"} color="textSubtle" fontSize="17px" textAlign="left">
               TGE Date
                  </Text>
                    <LabelWrapper>
              <DateInput onChange={handleChangeQuery} placeholder="TGE Date (UTC time)*" />
            </LabelWrapper>
                </div>

                <div className="step2row1right">
                <Text marginBottom={"10px"} color="textSubtle" fontSize="17px" textAlign="left">
                TGE Percent
                  </Text>
                    <LabelWrapper>
              <SearchInput onChange={handleChangeQuery} placeholder=" TGE Percent" />
            </LabelWrapper>
                </div>

 </div>

 <div className="step2row1" >
  
  <div className="step2row1left" >
 
  <Text marginBottom={"10px"} color="textSubtle" fontSize="17px" textAlign="left">
  Cycle (days)*
     </Text>
       <LabelWrapper>
 <SearchInput onChange={handleChangeQuery} placeholder=" Cycle (days)*" />
</LabelWrapper>
   </div>

   <div className="step2row1right" >
   <Text marginBottom={"10px"} color="textSubtle" fontSize="17px" textAlign="left">
   Cycle Release
     </Text>
       <LabelWrapper>
 <SearchInput onChange={handleChangeQuery} placeholder="Cycle Release Percent*" />
</LabelWrapper>
   </div>

</div>

                
            </div>
        </div>
    </div>}


    <Text marginBottom={"15px"} marginTop={"30px"} color="textSubtle" fontSize="17px" textAlign="left">
              For Investor
              </Text> 
    <Flex marginBottom={"25px"} alignItems="center">
                    <Checkbox
                    onClick={() => setShowText1(!showText1)}
                      name="own-address"
                      type="checkbox"
                      scale="sm"
                    />
                    <Text ml="10px" style={{ userSelect: 'none' }}>
                      Use vesting ?
                    </Text>
                  </Flex>
      {showText1 && <div   className="row setup-content" id="step-2">
        <div >
            <div >
        
<Text marginBottom={"5px"} marginTop={"20px"} color="textSubtle" fontSize="17px" textAlign="left">
              For Investor
              </Text>       
<div className="step2row1" >
  
  <div className="step2row1left">
 
  <Text marginBottom={"10px"} color="textSubtle" fontSize="17px" textAlign="left">
  TGE Date
     </Text>
       <LabelWrapper>
 <DateInput onChange={handleChangeQuery} placeholder="TGE Date (UTC time)*" />
</LabelWrapper>
   </div>

   <div className="step2row1right">
   <Text marginBottom={"10px"} color="textSubtle" fontSize="17px" textAlign="left">
   TGE Percent
     </Text>
       <LabelWrapper>
 <SearchInput onChange={handleChangeQuery} placeholder=" TGE Percent" />
</LabelWrapper>
   </div>

</div>

<div className="step2row1" >

<div className="step2row1left">

<Text marginBottom={"10px"} color="textSubtle" fontSize="17px" textAlign="left">
Cycle (days)*
</Text>
<LabelWrapper>
<SearchInput onChange={handleChangeQuery} placeholder=" Cycle (days)*" />
</LabelWrapper>
</div>

<div className="step2row1left">
<Text marginBottom={"10px"} color="textSubtle" fontSize="17px" textAlign="left">
Cycle Release
</Text>
<LabelWrapper>
<SearchInput onChange={handleChangeQuery} placeholder="Cycle Release Percent*" />
</LabelWrapper>
</div>

</div>

                
            </div>
        </div>
    </div>}
      

    </div>


  );
};

export default UseVesting;
