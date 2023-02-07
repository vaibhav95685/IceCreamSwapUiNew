import React, { useState } from 'react';
import Head from 'next/head';
import Radio from './Radio';
import Dropdown from './Dropdown';
import Dropdown1 from './Dropdown1';
import {  useMemo } from 'react'
import { AppBody } from 'components/App'
import {
  Text,
  Farm as FarmUI,
  SearchInput,
  Select,
  Checkbox,
   Flex,
   PageHeader

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


 

  

  
  return (

                    <PageHeader>
                    <AppBody>                     
                    <div style={{paddingTop:"50px", paddingBottom:"100px", marginLeft:"auto", marginRight:"auto", width:"75%"}}  >
                           <Text marginTop={"15px"} fontWeight={900} marginBottom={"10px"} color="textSubtle" fontSize="30px" textAlign="left">
                           AI District Icecreamswap
                           </Text>
                           <div style={{display:"flex" , justifyContent:"flex-end" , }}>
                           
                           {/* <button type="button" style={{
                            backgroundColor: 'pink',
                            color: 'white',
                            padding: '10px 20px',
                            border: 'none',
                            borderRadius: '15px',
                              }}>
                            Upcoming
                            </button>           */}

                           </div>
                           <div style={{display:"flex" , justifyContent:"flex-start" , marginTop:"-0px", marginBottom:"20px"}}>
                           
                           <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16" style={{marginRight:"10px"}}>
                           <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.153.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.154.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                           </svg>
                           <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16" style={{marginRight:'10px'}}>
                           <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                           </svg>
                           <svg xmlns="http://www.w3.org/2000/svg"  width="27" height="27" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16" style={{marginRight:'10px'}}>
                           <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.157-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.157 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.159.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                           </svg>
                           <svg xmlns="http://www.w3.org/2000/svg"  width="27" height="27" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16" style={{marginRight:'10px'}}>
                           <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                           </svg>
                           </div>
                      <Text marginBottom={"15px"} color="textSubtle" fontSize="17px" textAlign="left">
                      AI District is the DAO for AI innovation, community-driven exploration and investment in the future of AI, We guide genrations X, Y and Z through AI and learn it together. AI Bots  AI Incubator AI Community HUB Stacking DAO Voting And more No mint function! Tax is always at 4% or less! Tax can't be raised above 4%! Trade can't be stopped once started!
                                    </Text>
                      <div   className="row setup-content" id="step-4">
                          <div      >
                              <div     >
                                 
                                  <div style={{marginTop:"20px", display:"flex", flexDirection: "row",justifyContent: "space-between", borderBottom:"1px" }}    >
                                       <Text color="textSubtle" fontSize="15px" textAlign="left">Presale Address</Text>
                                       <Text color="textSubtle" fontSize="15px" textAlign="left">0x31BoD123455gF2</Text>
                                  </div>
                                  <div style={{ display:"flex", flexDirection: "row",justifyContent: "space-between", }}    >
                                       <Text color="textSubtle" fontSize="15px" textAlign="left">Tocken Name</Text>
                                       <h2 style={{color:'#f8567f' , fontSize:"15px"}}>AI District</h2>
                                  </div>
                                  <div style={{ display:"flex", flexDirection: "row",justifyContent: "space-between", }}    >
                                       <Text color="textSubtle" fontSize="15px" textAlign="left">Tocken Symbol</Text>
                                       <h2 style={{color:'#f8567f', fontSize:"15px"}}>AID</h2>
                                  </div>
                                  <div style={{ display:"flex", flexDirection: "row",justifyContent: "space-between", }}    >
                                       <Text color="textSubtle" fontSize="15px" textAlign="left">Tocken Decimal</Text>
                                       <h2 style={{color:'#f8567f', fontSize:"15px"}}>18</h2>
                                  </div>
                                  <div style={{ display:"flex", flexDirection: "row",justifyContent: "space-between", }}    >
                                       <Text color="textSubtle" fontSize="15px" textAlign="left">Tocken Address</Text>
                                       <div>
                                       <h2 style={{color:'#f8567f' , textAlign:'right', fontSize:"15px"}}>0x31BoD1234555655544ad</h2>
                                       <Text color="blue" fontSize="15px" textAlign="right">(Do not send BNB to the token address)</Text>
                                       </div>
                                  </div>
                                  <div style={{ display:"flex", flexDirection: "row",justifyContent: "space-between", }}    >
                                       <Text color="textSubtle" fontSize="15px" textAlign="left">Total Supply</Text>
                                       <h2 style={{color:'#f8567f', fontSize:"15px"}}>1,000,000,000 AID</h2>
                                  </div>
                                  <div style={{ display:"flex", flexDirection: "row",justifyContent: "space-between", }}    >
                                       <Text color="textSubtle" fontSize="15px" textAlign="left">Tokens For Presale</Text>
                                       <h2 style={{color:'#f8567f', fontSize:"15px"}}>369,000,000 AID</h2>
                                  </div>
                                  <div style={{ display:"flex", flexDirection: "row",justifyContent: "space-between", }}    >
                                       <Text color="textSubtle" fontSize="15px" textAlign="left">Tokens For Liquidity</Text>
                                       <h2 style={{color:'#f8567f', fontSize:"15px"}}>173,555,550 AID</h2>
                                  </div>
                                  <div style={{ display:"flex", flexDirection: "row",justifyContent: "space-between", }}    >
                                       <Text color="textSubtle" fontSize="15px" textAlign="left">Presale rate</Text>
                                       <h2 style={{color:'#f8567f', fontSize:"15px"}}>1 BNB = 1,230,000 AID</h2>
                                  </div>
                                  <div style={{ display:"flex", flexDirection: "row",justifyContent: "space-between", }}    >
                                       <Text color="textSubtle" fontSize="15px" textAlign="left">First Release For Presale</Text>
                                       <h2 style={{color:'#f8567f' , fontSize:"15px"}}>50%</h2>
                                  </div>
                                  <div style={{ display:"flex", flexDirection: "row",justifyContent: "space-between", }}    >
                                       <Text color="textSubtle" fontSize="15px" textAlign="left">Listing Rate</Text>
                                       <h2 style={{color:'#f8567f', fontSize:"15px"}}>1 BNB = 1,157,500 AID</h2>
                                  </div>
                                  <div style={{ display:"flex", flexDirection: "row",justifyContent: "space-between", }}    >
                                       <Text color="textSubtle" fontSize="15px" textAlign="left">Initial Market Cap (estimate)</Text>
                                       <h2 style={{color:'#f8567f', fontSize:"15px"}}>$283,801</h2>
                                  </div>
                                  <div style={{ display:"flex", flexDirection: "row",justifyContent: "space-between", }}    >
                                       <Text color="textSubtle" fontSize="15px" textAlign="left">Softcap</Text>
                                       <h2 style={{color:'#f8567f', fontSize:"15px"}}>75 BNB</h2>
                                  </div>
                                  <div style={{ display:"flex", flexDirection: "row",justifyContent: "space-between", }}    >
                                       <Text color="textSubtle" fontSize="15px" textAlign="left">Hardcap</Text>
                                       <h2 style={{color:'#f8567f', fontSize:"15px"}}>300 BNB</h2>
                                  </div>
                                  <div style={{ display:"flex", flexDirection: "row",justifyContent: "space-between", }}    >
                                       <Text color="textSubtle" fontSize="15px" textAlign="left">Unsold Token</Text>
                                       <h2 style={{color:'#f8567f', fontSize:"15px"}}>Refund</h2>
                                  </div>
                                  <div style={{ display:"flex", flexDirection: "row",justifyContent: "space-between", }}    >
                                       <Text color="textSubtle" fontSize="15px" textAlign="left">Presale Start Time</Text>
                                       <h2 style={{color:'#f8567f', fontSize:"15px"}}>2023.02.14 12:00 (UTC)</h2>
                                  </div>
                                  <div style={{ display:"flex", flexDirection: "row",justifyContent: "space-between", }}    >
                                       <Text color="textSubtle" fontSize="15px" textAlign="left">Presale End Time</Text>
                                       <h2 style={{color:'#f8567f', fontSize:"15px"}}>2023.02.17 18:00 (UTC)</h2>
                                  </div>
                                  <div style={{ display:"flex", flexDirection: "row",justifyContent: "space-between", }}    >
                                       <Text color="textSubtle" fontSize="15px" textAlign="left">Listing On</Text>
                                       <h2 style={{color:'#f8567f', fontSize:"15px"}}>Pancakeswap</h2>
                                  </div>
                                  <div style={{ display:"flex", flexDirection: "row",justifyContent: "space-between", }}    >
                                       <Text color="textSubtle" fontSize="15px" textAlign="left">Liquidity</Text>
                                       <h2 style={{color:'#f8567f', fontSize:"15px"}}>51%</h2>
                                  </div>
                                  <div style={{ display:"flex", flexDirection: "row",justifyContent: "space-between", }}    >
                                       <Text color="textSubtle" fontSize="15px" textAlign="left">Liquidity lockup time</Text>
                                       <h2 style={{color:'#f8567f', fontSize:"15px"}}>365 days after pool ends</h2>
                                  </div>
                                  
                              </div>
                              
                          </div>
                      </div>
                      <div style={{ marginBottom:"15px", marginTop:"15px"}}    >
                      <Text marginBottom={"10px"} color="textSubtle" fontSize="17px" textAlign="left">
                      Amount
                      </Text>
                      <LabelWrapper>
                      <SearchInput onChange={handleChangeQuery} placeholder="Amount" />
                      </LabelWrapper>
                </div>
                      <div style={{display:"flex", justifyContent:"space-between"}}>
                      <div style={{marginTop:"30px",marginLeft:"12px"}}>
                      <button  style={{ width:"85px" ,fontSize:"16px" ,backgroundColor: '#ccc', color: '#000', padding: '0.5em', borderRadius: '0.25em',border: 'none' }} > Back </button>
                      </div>
                      <div style={{marginTop:"30px",marginRight:"12px"}}>
                      <button style={{ width:"85px" ,fontSize:"16px" ,backgroundColor: '#f8567f', color: '#fff', padding: '0.5em', borderRadius: '0.25em',border: 'none' }} > Buy </button>
                      </div>
                     </div>
                      
                    </div>
                    </AppBody>  
                    </PageHeader>
  );
};







export default MultiStepForm;