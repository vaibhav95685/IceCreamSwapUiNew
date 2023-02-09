import React, { useState } from 'react';
import Head from 'next/head';
import Radio from './Radio';
import Dropdown from './Dropdown';
import Dropdown1 from './Dropdown1';
import { AppBody } from 'components/App'
import {  useMemo } from 'react';
import UseVesting from './usevesting';
import {
  AtomBox
  
  } from '@pancakeswap/ui';
  import Divider from 'views/Farms/components/Divider'
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



 

  const { pathname, query: urlQuery } = useRouter()
  const [_query, setQuery] = useState('')
  const normalizedUrlSearch = useMemo(() => (typeof urlQuery?.search === 'string' ? urlQuery.search : ''), [urlQuery])
  const query = normalizedUrlSearch && !_query ? normalizedUrlSearch : _query


 
  

  

  const [step, setStep] = useState(1);
 
  const handleNextStep = () => setStep(step + 1);
  const handlePrevStep = () => setStep(step - 1);

  return (

    <div>
        
      <div className="steps">
       
      </div>
      {step === 1 && (
        <Step1 handleNextStep={handleNextStep} />
      )}
      {step === 2 && (
        <Step2 handleNextStep={handleNextStep} handlePrevStep={handlePrevStep} />
      )}
      {step === 3 && (
        <Step3 handleNextStep={handleNextStep} handlePrevStep={handlePrevStep} />
      )}
      {step === 4 && (
        <Step4 handleNextStep={handleNextStep} handlePrevStep={handlePrevStep} />
      )}
      {step === 5 && (
        <Step5 handlePrevStep={handlePrevStep} />
      )}
    </div>
  );
};

const Step1 = ({ handleNextStep }) => (
<PageHeader>
<AppBody>
    <div style={{paddingTop:"50px", paddingBottom:"100px", marginLeft:"auto", marginRight:"auto", width:"85%"}}  >
    <AtomBox width="full" alignItems="center" flexDirection="column" padding="24px" borderBottom="1">
     <Heading  marginBottom={"5px"} textAlign={"center"} as="h2"> Step 1 - Verify Token</Heading>
     <Text textAlign={"center"} marginBottom={"5px"} color="textSubtle" fontSize="17px">
     Enter the token address and verify
                  </Text>
                  </AtomBox>
    <div   className="row setup-content" id="step-1">
        <div   className="col-xs-8">
            <div   className="col-md-8">
            <div style={{ marginBottom:"15px", marginTop:"15px"}}     >
            <Text marginBottom={"10px"} color="textSubtle" fontSize="17px" textAlign="left">
                    Token Address
                  </Text>
                    <LabelWrapper>
              <SearchInput onChange={handleChangeQuery} placeholder="Enter Token Address" />
            </LabelWrapper>
                </div>
               
                <div style={{ marginTop:'15px' }} className='Radiobuttongroup'>
                <Text marginBottom={"10px"} color="textSubtle" fontSize="17px" textAlign="left">
                    Currency
                  </Text>
                  <div style={{marginTop:"10px", marginBottom:"4px"}}>
                  <input style={{ accentColor:'#f8567f' , width:"20px", height:"20px", verticalAlign:"bottom"}} type="radio" id="radioButton1" name="radioGroup" value="option1"/>
                  <label style={{marginLeft:"8px",  color:"#7c6cac"}}>BNB</label><br/>
                  </div>
                  <input style={{ accentColor:'#f8567f', width:"20px", height:"20px", verticalAlign:"bottom" }} type="radio" id="radioButton1" name="radioGroup" value="option1"/>
                  <label style={{marginLeft:"8px",  color:"#7c6cac"}}>BUSD</label><br/>
                  <div style={{marginTop:"4px", marginBottom:"4px"}}>
                  <input style={{ accentColor:'#f8567f', width:"20px", height:"20px", verticalAlign:"bottom" }} type="radio" id="radioButton1" name="radioGroup" value="option1"/>
                  <label style={{marginLeft:"8px",  color:"#7c6cac"}}>USDC</label><br/>
                  </div>
                  <input style={{ accentColor:'#f8567f' , width:"20px", height:"20px", verticalAlign:"bottom"}} type="radio" id="radioButton1" name="radioGroup" value="option1"/>
                  <label style={{marginLeft:"8px",  color:"#7c6cac"}}>USDT</label><br/>
                  </div>

                  <div style={{ marginTop:'15px' }} className='Radiobuttongroup'>
                  <Text marginBottom={"10px"} color="textSubtle" fontSize="17px" textAlign="left">
                    Fee options
                  </Text>
                  <div style={{marginTop:"10px", marginBottom:"4px"}}>
                  <input style={{ accentColor:'#f8567f', width:"20px", height:"20px", verticalAlign:"bottom" }} type="radio" id="radioButton1" name="radioGroup2" value="option1"/>
                  <label style={{marginLeft:"8px",  color:"#7c6cac"}}>5% BNB raised only</label><br/>
                  </div>
                  <div style={{marginTop:"4px", marginBottom:"4px"}}>
                  <input style={{ accentColor:'#f8567f', width:"20px", height:"20px", verticalAlign:"bottom" }} type="radio" id="radioButton1" name="radioGroup2" value="option1"/>
                  <label style={{marginLeft:"8px",  color:"#7c6cac"}}>Other</label><br/>
                  </div>
                  </div>

                  <div style={{ marginTop:'15px' }} className='Radiobuttongroup'>
                  <Text marginBottom={"10px"} color="textSubtle" fontSize="17px" textAlign="left">
                    Listing options
                  </Text>
                  <div style={{marginTop:"10px", marginBottom:"4px"}}>
                  <input style={{ accentColor:'#f8567f', width:"20px", height:"20px", verticalAlign:"bottom" }} type="radio" id="radioButton1" name="radioGroup3" value="option1"/>
                  <label style={{marginLeft:"8px",  color:"#7c6cac"}}>Auto Listing</label><br/>
                  </div>
                  <div style={{marginTop:"4px", marginBottom:"25px"}}>
                  <input style={{ accentColor:'#f8567f', width:"20px", height:"20px", verticalAlign:"bottom" }}  type="radio" id="radioButton1" name="radioGroup3" value="option1"/>
                  <label style={{marginLeft:"8px",  color:"#7c6cac"}}>Manual Listing</label><br/>
                 
                  </div>
                </div>
            </div>
        </div>
    </div>
    <Divider margin="0px" />
    <div style={{marginTop:"30px"}}>
    <button  onClick={handleNextStep} style={{ width:"85px" ,fontSize:"16px" ,backgroundColor: '#f8567f', color: '#fff', padding: '0.5em', borderRadius: '0.25em',border: 'none' }} > Next </button>
    </div>
  </div>
  </AppBody>
  </PageHeader>


);

const Step2 = ({ handleNextStep, handlePrevStep }) => (
  <PageHeader>
    <AppBody>
  <div style={{paddingTop:"50px", paddingBottom:"100px", marginLeft:"auto", marginRight:"auto", width:"85%"}}  >
  <AtomBox width="full" alignItems="center" flexDirection="column" padding="24px" borderBottom="1">
  <Heading  marginBottom={"5px"} textAlign={"center"} as="h2"> Step 2 - DeFi Launchpad Info</Heading>
     <Text textAlign={"center"} marginBottom={"2px"} color="textSubtle" fontSize="17px">
     Enter the launchpad information that you want to raise , that should be enter all details about your presale
                  </Text>
    </AtomBox>
    <div   className="row setup-content" id="step-2">
        <div >
            <div >
                <div >
                <Text marginBottom={"10px"} marginTop={"20px"} color="textSubtle" fontSize="17px" textAlign="left">
                    Presale rate
                  </Text>
                    <LabelWrapper>
              <SearchInput onChange={handleChangeQuery} placeholder="Presale rate" />
            </LabelWrapper>
                </div>

                <div >
                <Text marginTop={"10px"} color="textSubtle" fontSize="17px" textAlign="left">
                    Whitelist
                  </Text>
                    <div>
                    
    <Radio/>

<div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}} >
               <div style={{ marginBottom:"15px", marginTop:"15px"}}     >
               <Text marginBottom={"10px"} color="textSubtle" fontSize="17px" textAlign="left">
                    Softcap (BNB)
                  </Text>
                    <LabelWrapper>
              <SearchInput onChange={handleChangeQuery} placeholder="Softcap (BNB)" />
            </LabelWrapper>
                </div>

                <div style={{ marginBottom:"15px",marginTop:"15px",marginLeft:"55px"}}      >
                <Text marginBottom={"10px"} color="textSubtle" fontSize="17px" textAlign="left">
                    Hardcap (BNB)
                  </Text>
                    <LabelWrapper>
              <SearchInput onChange={handleChangeQuery} placeholder="Hardcap (BNB)" />
            </LabelWrapper>
                </div>

 </div>

 <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}} >
               <div style={{ marginBottom:"15px", marginTop:"5px"}}     >
               <Text marginBottom={"10px"} color="textSubtle" fontSize="17px" textAlign="left">
                    Minimum Buy (BNB)
                  </Text>
                    <LabelWrapper>
              <SearchInput onChange={handleChangeQuery} placeholder="Minimum Buy (BNB)" />
            </LabelWrapper>
                </div>

                <div style={{ marginBottom:"15px",marginTop:"5px",marginLeft:"55px"}}      >
                <Text marginBottom={"10px"} color="textSubtle" fontSize="17px" textAlign="left">
                    Maximum Buy (BNB)                  </Text>
                    <LabelWrapper>
              <SearchInput onChange={handleChangeQuery} placeholder="Hardcap (BNB)" />
            </LabelWrapper>
                </div>

 </div>



 <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}} >
               <div style={{ marginBottom:"15px", marginTop:"5px"}}     >
               <Text marginBottom={"10px"} color="textSubtle" fontSize="17px" textAlign="left">
                    Refund Type
                  </Text>
                    <LabelWrapper>
              <Select 
                options={[
                  {
                    label: ('Refund'),
                    value: 'Refund',
                  },
                  {
                    label: ('Burn'),
                    value: 'Burn',
                  },
                  
                 
                ]}
                // onOptionChange={handleSortOptionChange}
              />
            </LabelWrapper>
                </div>
                <div style={{ marginBottom:"15px", marginTop:"5px", marginLeft:"55px"}}     >
               <Text marginBottom={"10px"} color="textSubtle" fontSize="17px" textAlign="left">
                    Liquidity
                  </Text>
                    <LabelWrapper>
              <SearchInput  placeholder="Liquidity %" />
            </LabelWrapper>
                </div>
                

 </div>
 <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}} >
 <div style={{ marginBottom:"25px",marginTop:"5px"}}      >
                <Text marginLeft={"5px"} marginBottom={"10px"} color="textSubtle" fontSize="17px" textAlign="left">
                    Router
                  </Text>
                    <LabelWrapper>
              <Select 
                options={[
                  {
                    label: ('Pancakeswap'),
                    value: 'Pancakeswap',
                  },
                  {
                    label: ('Pinkswap Testnet'),
                    value: 'Pinkswap Testnet',
                  },
                  
                 
                ]}
                // onOptionChange={handleSortOptionChange}
              />
            </LabelWrapper>
                </div>


             

                <div style={{ marginBottom:"25px",marginTop:"5px",marginLeft:"55px"}}      >
                <Text marginLeft={"5px"} marginBottom={"10px"} color="textSubtle" fontSize="17px" textAlign="left">
                    Listing
                  </Text>
                    <LabelWrapper>
              <SearchInput onChange={handleChangeQuery} placeholder="Listing rate" />
            </LabelWrapper>
                </div>

 </div>
 

  </div>
                </div>
            </div>
        </div>
    </div>
    <Divider margin="0px" />
    <div style={{display:"flex", justifyContent:"space-between"}}>
    <div style={{marginTop:"30px",marginLeft:"12px"}}>
    <button onClick={handlePrevStep} style={{ width:"85px" ,fontSize:"16px" ,backgroundColor: '#ccc', color: '#000', padding: '0.5em', borderRadius: '0.25em',border: 'none' }}  > Back </button>
    </div>
    <div style={{marginTop:"30px",marginRight:"12px"}}>
    <button onClick={handleNextStep} style={{ width:"85px" ,fontSize:"16px" ,backgroundColor: '#f8567f', color: '#fff', padding: '0.5em', borderRadius: '0.25em',border: 'none' }} > Next </button>
    </div>
    </div>
  </div>
  </AppBody>
  </PageHeader>
);

const Step3 = ({ handleNextStep, handlePrevStep }) => (
  <PageHeader>
    <AppBody>
  <div style={{paddingTop:"50px", paddingBottom:"100px", marginLeft:"auto", marginRight:"auto", width:"85%"}}  >
  <AtomBox width="full" alignItems="center" flexDirection="column" padding="24px" borderBottom="1">
  <Heading  marginBottom={"5px"} textAlign={"center"} as="h2"> Step 3 - Additional DeFi Launchpad Info</Heading>
     <Text textAlign={"center"} marginBottom={"2px"} color="textSubtle" fontSize="17px">
     Enter the launchpad information that you want to raise , that should be enter all details about your presale
                  </Text>
    </AtomBox>
    <Text  marginTop={"25px"} marginBottom={"10px"} color="textSubtle" fontSize="17px" textAlign="left">
 Select start time & end time (UTC)
                  </Text>
 <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}} >
  
               <div style={{ marginBottom:"15px", marginTop:"5px"}}     >
              
               <Text marginBottom={"10px"} color="textSubtle" fontSize="17px" textAlign="left">
                  Start time (UTC)
                  </Text>
                    <LabelWrapper>
              <SearchInput onChange={handleChangeQuery} placeholder="Start time (UTC)" />
            </LabelWrapper>
                </div>

                <div style={{ marginBottom:"25px",marginTop:"5px",marginLeft:"55px"}}      >
                <Text marginBottom={"10px"} color="textSubtle" fontSize="17px" textAlign="left">
                   End time (UTC)
                  </Text>
                    <LabelWrapper>
              <SearchInput onChange={handleChangeQuery} placeholder="End time (UTC)" />
            </LabelWrapper>
                </div>

 </div>
    <div>
     <UseVesting/>
    </div>

    <Divider margin="0px" />
    <div style={{display:"flex", justifyContent:"space-between"}}>
    <div style={{marginTop:"30px",marginLeft:"12px"}}>
    <button onClick={handlePrevStep} style={{ width:"85px" ,fontSize:"16px" ,backgroundColor: '#ccc', color: '#000', padding: '0.5em', borderRadius: '0.25em',border: 'none' }}  > Back </button>
    </div>
    <div style={{marginTop:"30px",marginRight:"12px"}}>
    <button onClick={handleNextStep} style={{ width:"85px" ,fontSize:"16px" ,backgroundColor: '#f8567f', color: '#fff', padding: '0.5em', borderRadius: '0.25em',border: 'none' }} > Next </button>
    </div>
    </div>
  </div>
  </AppBody>
  </PageHeader>
);

const Step4 = ({ handleNextStep, handlePrevStep }) => (
  <PageHeader>
    <AppBody>
  <div style={{paddingTop:"50px", paddingBottom:"100px", marginLeft:"auto", marginRight:"auto", width:"85%"}}  >
  <AtomBox width="full" alignItems="center" flexDirection="column" padding="24px" borderBottom="1">
  <Heading  marginBottom={"5px"} textAlign={"center"} as="h2"> Step 4 - Add Additional Info</Heading>
     <Text textAlign={"center"} marginBottom={"5px"} color="textSubtle" fontSize="17px">
     Let people know who you are
                  </Text>
                  </AtomBox>


    <div   className="row setup-content" id="step-3">
        <div      >
            <div     >
            <div style={{display:"flex", flexDirection:"row"}} >
  
  <div style={{ marginBottom:"15px", marginTop:"25px"}}     >
 
  <Text marginBottom={"10px"} color="textSubtle" fontSize="17px" textAlign="left">
                    Logo URL
                  </Text>
       <LabelWrapper>
              <SearchInput onChange={handleChangeQuery} placeholder="Logo URL*" />
            </LabelWrapper>
   </div>

   <div style={{ marginBottom:"15px",marginTop:"25px",marginLeft:"55px"}}      >
   <Text marginBottom={"10px"} color="textSubtle" fontSize="17px" textAlign="left">
                    Website
                  </Text>
       <LabelWrapper>
              <SearchInput onChange={handleChangeQuery} placeholder="Website" />
            </LabelWrapper>
   </div>

</div>

<div style={{display:"flex", flexDirection:"row"}} >
  
  <div style={{ marginBottom:"15px", marginTop:"5px"}}     >
 
  <Text marginBottom={"10px"} color="textSubtle" fontSize="17px" textAlign="left">
                    Facebook
                  </Text>
       <LabelWrapper>
              <SearchInput onChange={handleChangeQuery} placeholder="Facebook" />
            </LabelWrapper>
   </div>

   <div style={{ marginBottom:"15px",marginTop:"5px",marginLeft:"55px"}}      >
   <Text marginBottom={"10px"} color="textSubtle" fontSize="17px" textAlign="left">
                    Twitter
                  </Text>
       <LabelWrapper>
              <SearchInput onChange={handleChangeQuery} placeholder="Twitter" />
            </LabelWrapper>
   </div>

</div>

<div style={{display:"flex", flexDirection:"row"}} >
  
  <div style={{ marginBottom:"15px", marginTop:"5px"}}     >
 
  <Text marginBottom={"10px"} color="textSubtle" fontSize="17px" textAlign="left">
                    Github
                  </Text>
       <LabelWrapper>
              <SearchInput onChange={handleChangeQuery} placeholder="Github" />
            </LabelWrapper>
   </div>

   <div style={{ marginBottom:"15px",marginTop:"5px",marginLeft:"55px"}}      >
   <Text marginBottom={"10px"} color="textSubtle" fontSize="17px" textAlign="left">
                    Telegram
                  </Text>
       <LabelWrapper>
              <SearchInput onChange={handleChangeQuery} placeholder="Telegram" />
            </LabelWrapper>
   </div>

</div>


<div style={{display:"flex", flexDirection:"row"}} >
  
  <div style={{ marginBottom:"15px", marginTop:"5px"}}     >
 
  <Text marginBottom={"10px"} color="textSubtle" fontSize="17px" textAlign="left">
                    Instagram
                  </Text>
       <LabelWrapper>
              <SearchInput onChange={handleChangeQuery} placeholder="Instagram" />
            </LabelWrapper>
   </div>

   <div style={{ marginBottom:"15px",marginTop:"5px",marginLeft:"55px"}}      >
   <Text marginBottom={"10px"} color="textSubtle" fontSize="17px" textAlign="left">
                    Discord
                  </Text>
       <LabelWrapper>
              <SearchInput onChange={handleChangeQuery} placeholder="Discord" />
            </LabelWrapper>
   </div>

</div>


<div style={{display:"flex", flexDirection:"row"}} >
  
  <div style={{ marginBottom:"15px", marginTop:"5px"}}     >
 
  <Text marginBottom={"10px"} color="textSubtle" fontSize="17px" textAlign="left">
                    Reddit
                  </Text>
       <LabelWrapper>
              <SearchInput onChange={handleChangeQuery} placeholder="Reddit" />
            </LabelWrapper>
   </div>

   <div style={{ marginBottom:"15px",marginTop:"5px",marginLeft:"55px"}}      >
   <Text marginBottom={"10px"} color="textSubtle" fontSize="17px" textAlign="left">
                    Youtube
                  </Text>
       <LabelWrapper>
              <SearchInput onChange={handleChangeQuery} placeholder="Youtube Video" />
            </LabelWrapper>
   </div>

</div>
<div      >
<Text marginBottom={"10px"} color="textSubtle" fontSize="17px" textAlign="left">
                    Description
                  </Text>
                    <LabelWrapper style={{marginBottom:"25px"}}>
              <SearchInput onChange={handleChangeQuery} placeholder="Description" />
            </LabelWrapper>
                </div>
            </div>
        </div>
    </div>

    <Divider margin="0px" />
    <div style={{display:"flex", justifyContent:"space-between"}}>
    <div style={{marginTop:"30px",marginLeft:"12px"}}>
    <button onClick={handlePrevStep} style={{ width:"85px" ,fontSize:"16px" ,backgroundColor: '#ccc', color: '#000', padding: '0.5em', borderRadius: '0.25em',border: 'none' }}  > Back </button>
    </div>
     <div style={{marginTop:"30px",marginRight:"12px"}}>
    <button onClick={handleNextStep} style={{ width:"85px" ,fontSize:"16px" ,backgroundColor: '#f8567f', color: '#fff', padding: '0.5em', borderRadius: '0.25em',border: 'none' }} > Next </button>
 </div>
 </div>
  </div>
  </AppBody>
  </PageHeader>
);

const Step5 = ({ handlePrevStep }) => (
  <PageHeader>
    <AppBody>
  <div style={{paddingTop:"50px", paddingBottom:"100px", marginLeft:"auto", marginRight:"auto", width:"85%"}}  >
  <AtomBox width="full" alignItems="center" flexDirection="column" padding="24px" borderBottom="1">
  <Heading  marginBottom={"5px"} textAlign={"center"} as="h2"> Step 5 - Finish</Heading>
     <Text textAlign={"center"} marginBottom={"5px"} color="textSubtle" fontSize="17px">
     Review your information
                  </Text>
        </AtomBox>
        
    <div   className="row setup-content" id="step-4">
        <div      >
            <div     >
               
                <div style={{marginTop:"25px", display:"flex", flexDirection: "row",justifyContent: "space-between", }}    >
                     <Text color="textSubtle" fontSize="19px" textAlign="left">Total Tocken</Text>
                     <Text color="textSubtle" fontSize="19px" textAlign="left">530,875 TN</Text>
                </div>
                <div style={{ display:"flex", flexDirection: "row",justifyContent: "space-between", }}    >
                     <Text color="textSubtle" fontSize="19px" textAlign="left">Factory Address</Text>
                     <h2 style={{color:'#f8567f'}}>Dx28x71D3dO36bxxd5</h2>
                </div>
                <div style={{ display:"flex", flexDirection: "row",justifyContent: "space-between", }}    >
                     <Text color="textSubtle" fontSize="19px" textAlign="left">Tocken name</Text>
                     <h2 style={{color:'#f8567f'}}>Test</h2>
                </div>
                <div style={{ display:"flex", flexDirection: "row",justifyContent: "space-between", }}    >
                     <Text color="textSubtle" fontSize="19px" textAlign="left">Tocken Symbol</Text>
                     <h2 style={{color:'#f8567f'}}>TN</h2>
                </div>
                <div style={{ display:"flex", flexDirection: "row",justifyContent: "space-between", }}    >
                     <Text color="textSubtle" fontSize="19px" textAlign="left">Tocken Decimal</Text>
                     <h2 style={{color:'#f8567f'}}>18</h2>
                </div>
                <div style={{ display:"flex", flexDirection: "row",justifyContent: "space-between", }}    >
                     <Text color="textSubtle" fontSize="19px" textAlign="left">Presale rate</Text>
                     <h2 style={{color:'#f8567f'}}>10 TN</h2>
                </div>
                <div style={{ display:"flex", flexDirection: "row",justifyContent: "space-between", }}    >
                     <Text color="textSubtle" fontSize="19px" textAlign="left">Listing rate</Text>
                     <h2 style={{color:'#f8567f'}}>1 TN</h2>
                </div>
                <div style={{ display:"flex", flexDirection: "row",justifyContent: "space-between", }}    >
                     <Text color="textSubtle" fontSize="19px" textAlign="left">Sale method</Text>
                     <h2 style={{color:'#f8567f'}}>Public</h2>
                </div>
                <div style={{ display:"flex", flexDirection: "row",justifyContent: "space-between", }}    >
                     <Text color="textSubtle" fontSize="19px" textAlign="left">Softcap</Text>
                     <h2 style={{color:'#f8567f'}}>25000 BNB</h2>
                </div>
                <div style={{ display:"flex", flexDirection: "row",justifyContent: "space-between", }}    >
                     <Text color="textSubtle" fontSize="19px" textAlign="left">Hardcap</Text>
                     <h2 style={{color:'#f8567f'}}>50000 BNB</h2>
                </div>
                <div style={{ display:"flex", flexDirection: "row",justifyContent: "space-between", }}    >
                     <Text color="textSubtle" fontSize="19px" textAlign="left">Unsold Token</Text>
                     <h2 style={{color:'#f8567f'}}>Retund</h2>
                </div>
                <div style={{ display:"flex", flexDirection: "row",justifyContent: "space-between", }}    >
                     <Text color="textSubtle" fontSize="19px" textAlign="left">Minimum Buy</Text>
                     <h2 style={{color:'#f8567f'}}>0,1BNB</h2>
                </div>
                <div style={{ display:"flex", flexDirection: "row",justifyContent: "space-between", }}    >
                     <Text color="textSubtle" fontSize="19px" textAlign="left">Msximum Buy</Text>
                     <h2 style={{color:'#f8567f'}}>1000000</h2>
                </div>
                <div style={{ display:"flex", flexDirection: "row",justifyContent: "space-between", }}    >
                     <Text color="textSubtle" fontSize="19px" textAlign="left">Liquidity</Text>
                     <h2 style={{color:'#f8567f'}}>65%</h2>
                </div>
                <div style={{ display:"flex", flexDirection: "row",justifyContent: "space-between", }}    >
                     <Text color="textSubtle" fontSize="19px" textAlign="left">Stsrt time</Text>
                     <h2 style={{color:'#f8567f'}}>2023-01-28T08.00(UTC)</h2>
                </div>
                <div style={{ display:"flex", flexDirection: "row",justifyContent: "space-between", }}    >
                     <Text color="textSubtle" fontSize="19px" textAlign="left">End time</Text>
                     <h2 style={{color:'#f8567f'}}>2023-01-31T08.00(UTC)</h2>
                </div>
                <div style={{ display:"flex", flexDirection: "row",justifyContent: "space-between", }}    >
                     <Text color="textSubtle" fontSize="19px" textAlign="left">Liquidity lockup time</Text>
                     <h2 style={{color:'#f8567f'}}>10 min</h2>
                </div>
                <div style={{ display:"flex", flexDirection: "row",justifyContent: "space-between", }}    >
                     <Text color="textSubtle" fontSize="19px" textAlign="left">website</Text>
                     <h2 style={{color:'#f8567f'}}>www.google.com</h2>
                </div>
                <div style={{ display:"flex", flexDirection: "row",justifyContent: "space-between",marginBottom:"25px" }}    >
                     <Text color="textSubtle" fontSize="19px" textAlign="left" style={{color:'#f8567f'}}>Description</Text>
                     <h2 style={{color:'#f8567f'}}>Desc</h2>
                </div>
            </div>
        </div>
    </div>

    <Divider margin="0px" />
    <div style={{display:"flex", justifyContent:"space-between"}}>
    <div style={{marginTop:"30px",marginLeft:"12px"}}>
    <button onClick={handlePrevStep} style={{ width:"85px" ,fontSize:"16px" ,backgroundColor: '#ccc', color: '#000', padding: '0.5em', borderRadius: '0.25em',border: 'none' }} > Back </button>
  </div>
  <div style={{marginTop:"30px",marginRight:"12px"}}>
    <button style={{ width:"85px" ,fontSize:"16px" ,backgroundColor: '#f8567f', color: '#fff', padding: '0.5em', borderRadius: '0.25em',border: 'none' }} > Submit </button>
    </div>
    </div>
  </div>
  </AppBody>
  </PageHeader>
);

export default MultiStepForm;
