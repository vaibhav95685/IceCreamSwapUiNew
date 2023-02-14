import React, { useState } from 'react'
import Radio from './components/Radio'
import { AppBody } from 'components/App'
import { useMemo } from 'react'
import UseVesting from './components/UseVesting'
import { AtomBox } from '@pancakeswap/ui'
import Divider from 'views/Farms/components/Divider'
import { Text, Farm as FarmUI, SearchInput, Select, PageHeader, Heading } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const LabelWrapper = styled.div`
  > ${Text} {
    font-size: 12px;
  }
`
const Description = styled.div`
{
  margin-bottom: 25px;
}
`
const Container = styled.div`
{
  display: flex;
  flex-direction: row;
}
`
const MainContainer = styled.div`
{
  padding-top: 50x;
  padding-bottom: 100px;
  margin-left: auto;
  margin-right: auto;
  width: 85%;
}
`
const TBG = styled.div`
{
  margin-bottom: 15px;
  margin-top:15px ;
}
`
const RadioButtonGap = styled.div`
{
  margin-top:8px ;
  margin-bottom: 4px;  
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
const RowBox = styled.div`
{
  margin-bottom: 15px;
  margin-top: 15px;
}
`
const RowBoxx = styled.div`
{
  margin-bottom: 15px;
  margin-top: 15px;
  margin-left: 55px;
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

  const [step, setStep] = useState(1)
  const handleNextStep = () => setStep(step + 1)
  const handlePrevStep = () => setStep(step - 1)

  return (
    <div>
      <div className="steps"></div>
      {step === 1 && <Step1 handleNextStep={handleNextStep} />}
      {step === 2 && <Step2 handleNextStep={handleNextStep} handlePrevStep={handlePrevStep} />}
      {step === 3 && <Step3 handleNextStep={handleNextStep} handlePrevStep={handlePrevStep} />}
      {step === 4 && <Step4 handleNextStep={handleNextStep} handlePrevStep={handlePrevStep} />}
      {step === 5 && <Step5 handlePrevStep={handlePrevStep} />}
    </div>
  )
}

const Step1 = ({ handleNextStep }) => (
  <PageHeader>
    <AppBody>
      <MainContainer>
        <AtomBox width="full" alignItems="center" flexDirection="column" padding="24px" borderBottom="1">
          <Heading marginBottom={'5px'} textAlign={'center'} as="h2">
            {' '}
            Step 1 - Verify Token
          </Heading>
          <Text textAlign={'center'} marginBottom={'5px'} color="textSubtle" fontSize="17px">
            Enter the token address and verify
          </Text>
        </AtomBox>
        
          
            
              <TBG >
                <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
                  Token Address
                </Text>
                <LabelWrapper>
                  <SearchInput onChange={handleChangeQuery} placeholder="Enter Token Address" />
                </LabelWrapper>
              </TBG>

              <RadioButtonGap>
                <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
                  Currency
                </Text>
                <RadioButtonGap>
                  <input className="radioinputstep1" type="radio" id="radioButton1" name="radioGroup" value="option1" />
                  <label className="lablestep1">BNB</label>
                  <br/>
                </RadioButtonGap>
                <RadioButtonGap>
                <input className="radioinputstep1" type="radio" id="radioButton1" name="radioGroup" value="option1" />
                <label className="lablestep1">BUSD</label>
                <br/>
                </RadioButtonGap>
                <RadioButtonGap>
                  <input className="radioinputstep1" type="radio" id="radioButton1" name="radioGroup" value="option1" />
                  <label className="lablestep1">USDC</label>
                  <br/>
                </RadioButtonGap>
                <RadioButtonGap>
                <input className="radioinputstep1" type="radio" id="radioButton1" name="radioGroup" value="option1" />
                <label className="lablestep1">USDT</label>
                <br/>
                </RadioButtonGap>
              </RadioButtonGap>

              <TBG >
                <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
                  Fee options
                </Text>
                <RadioButtonGap>
                  <input
                    className="radioinputstep1"
                    type="radio"
                    id="radioButton1"
                    name="radioGroup2"
                    value="option1"
                  />
                  <label className="lablestep1">5% BNB raised only</label>
                  <br />
                </RadioButtonGap>
                <RadioButtonGap>
                  <input
                    className="radioinputstep1"
                    type="radio"
                    id="radioButton1"
                    name="radioGroup2"
                    value="option1"
                  />
                  <label className="lablestep1">Other</label>
                  <br />
                </RadioButtonGap>
              </TBG>

              <TBG>
                <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
                  Listing options
                </Text>
                <RadioButtonGap>
                  <input
                    className="radioinputstep1"
                    type="radio"
                    id="radioButton1"
                    name="radioGroup3"
                    value="option1"
                  />
                  <label className="lablestep1">Auto Listing</label>
                  <br />
                </RadioButtonGap>
                <RadioButtonGap>
                  <input
                    className="radioinputstep1"
                    type="radio"
                    id="radioButton1"
                    name="radioGroup3"
                    value="option1"
                  />
                  <label className="lablestep1">Manual Listing</label>
                  <br />
                </RadioButtonGap>
              </TBG>
            
          
        
        <Divider margin="0px" />
        <Button>
          <button onClick={handleNextStep} className="bottomgreybutton">
            {' '}
            Next{' '}
          </button>
        </Button>
      </MainContainer>
    </AppBody>
  </PageHeader>
)

const Step2 = ({ handleNextStep, handlePrevStep }) => (
  <PageHeader>
    <AppBody>
      <MainContainer>
        <AtomBox width="full" alignItems="center" flexDirection="column" padding="24px" borderBottom="1">
          <Heading textAlign={'center'} as="h2">
            {' '}
            Step 2 - DeFi Launchpad Info
          </Heading>
          <Text textAlign={'center'} color="textSubtle" fontSize="17px">
            Enter the launchpad information that you want to raise , that should be enter all details about your presale
          </Text>
        </AtomBox>
        
          
            
              
                <Text marginBottom={'10px'} marginTop={'20px'} color="textSubtle" fontSize="17px" textAlign="left">
                  Presale rate
                </Text>
                <LabelWrapper>
                  <SearchInput onChange={handleChangeQuery} placeholder="Presale rate" />
                </LabelWrapper>
              

            
                <Text marginTop={'15px'} color="textSubtle" fontSize="17px" textAlign="left">
                  Whitelist
                </Text>
                
                  <Radio />

                  <RowDivider>
                    <RowBox>
                      <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
                        Softcap (BNB)
                      </Text>
                      <LabelWrapper>
                        <SearchInput onChange={handleChangeQuery} placeholder="Softcap (BNB)" />
                      </LabelWrapper>
                    </RowBox>

                    <RowBox>
                      <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
                        Hardcap (BNB)
                      </Text>
                      <LabelWrapper>
                        <SearchInput onChange={handleChangeQuery} placeholder="Hardcap (BNB)" />
                      </LabelWrapper>
                    </RowBox>
                  </RowDivider>

                  <RowDivider>
                    <RowBox>
                      <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
                        Minimum Buy (BNB)
                      </Text>
                      <LabelWrapper>
                        <SearchInput onChange={handleChangeQuery} placeholder="Minimum Buy (BNB)" />
                      </LabelWrapper>
                    </RowBox>

                    <RowBox>
                      <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
                        Maximum Buy (BNB){' '}
                      </Text>
                      <LabelWrapper>
                        <SearchInput onChange={handleChangeQuery} placeholder="Hardcap (BNB)" />
                      </LabelWrapper>
                    </RowBox>
                  </RowDivider>

                  <RowDivider>
                    <RowBox>
                      <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
                        Refund Type
                      </Text>
                      <LabelWrapper>
                        <Select
                          options={[
                            {
                              label: 'Refund',
                              value: 'Refund',
                            },
                            {
                              label: 'Burn',
                              value: 'Burn',
                            },
                          ]}
                          // onOptionChange={handleSortOptionChange}
                        />
                      </LabelWrapper>
                    </RowBox>
                    <RowBox>
                      <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
                        Liquidity
                      </Text>
                      <LabelWrapper>
                        <SearchInput onChange={handleChangeQuery} placeholder="Liquidity %" />
                      </LabelWrapper>
                    </RowBox>
                  </RowDivider>
                  <RowDivider >
                    <RowBox>
                      <Text
                        marginLeft={'5px'}
                        marginBottom={'10px'}
                        color="textSubtle"
                        fontSize="17px"
                        textAlign="left"
                      >
                        Router
                      </Text>
                      <LabelWrapper>
                        <Select
                          options={[
                            {
                              label: 'Pancakeswap',
                              value: 'Pancakeswap',
                            },
                            {
                              label: 'Pinkswap Testnet',
                              value: 'Pinkswap Testnet',
                            },
                          ]}
                          // onOptionChange={handleSortOptionChange}
                        />
                      </LabelWrapper>
                    </RowBox>

                    <RowBox>
                      <Text
                        marginLeft={'5px'}
                        marginBottom={'10px'}
                        color="textSubtle"
                        fontSize="17px"
                        textAlign="left"
                      >
                        Listing
                      </Text>
                      <LabelWrapper>
                        <SearchInput onChange={handleChangeQuery} placeholder="Listing rate" />
                      </LabelWrapper>
                    </RowBox>
                  </RowDivider>
                
            
            
         
       
        <Divider margin="0px" />
        <RowDivider>
          <Button>
            <button onClick={handlePrevStep} className="bottomgreybutton">
              {' '}
              Back{' '}
            </button>
          </Button>
          <Button >
            <button onClick={handleNextStep} className="bottompinkbutton">
              {' '}
              Next{' '}
            </button>
          </Button>
        </RowDivider>
      </MainContainer>
    </AppBody>
  </PageHeader>
)

const Step3 = ({ handleNextStep, handlePrevStep }) => (
  <PageHeader>
    <AppBody>
      <MainContainer>
        <AtomBox width="full" alignItems="center" flexDirection="column" padding="24px" borderBottom="1">
          <Heading textAlign={'center'} as="h2">
            {' '}
            Step 3 - Additional DeFi Launchpad Info
          </Heading>
          <Text textAlign={'center'} color="textSubtle" fontSize="17px">
            Enter the launchpad information that you want to raise , that should be enter all details about your presale
          </Text>
        </AtomBox>
        <Text marginTop={'25px'} marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
          Select start time & end time (UTC)
        </Text>
        <RowDivider>
          <RowBox >
            <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
              Start time (UTC)
            </Text>
            <LabelWrapper>
              <SearchInput onChange={handleChangeQuery} placeholder="Start time (UTC)" />
            </LabelWrapper>
          </RowBox>

          <RowBox >
            <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
              End time (UTC)
            </Text>
            <LabelWrapper>
              <SearchInput onChange={handleChangeQuery} placeholder="End time (UTC)" />
            </LabelWrapper>
          </RowBox>
        </RowDivider>
       
          <UseVesting />
        

        <Divider margin="0px" />
        <RowDivider>
          <Button>
            <button onClick={handlePrevStep} className="bottomgreybutton">
              {' '}
              Back{' '}
            </button>
          </Button>
          <Button>
            <button onClick={handleNextStep} className="bottompinkbutton">
              {' '}
              Next{' '}
            </button>
          </Button>
        </RowDivider>
      </MainContainer>
    </AppBody>
  </PageHeader>
)

const Step4 = ({ handleNextStep, handlePrevStep }) => (
  <PageHeader>
    <AppBody>
      <MainContainer>
        <AtomBox width="full" alignItems="center" flexDirection="column" padding="24px" borderBottom="1">
          <Heading marginBottom={'5px'} textAlign={'center'} as="h2">
            {' '}
            Step 4 - Add Additional Info
          </Heading>
          <Text textAlign={'center'} marginBottom={'5px'} color="textSubtle" fontSize="17px">
            Let people know who you are
          </Text>
        </AtomBox>

       
          
            
              <Container>
                <RowBox>
                  <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
                    Logo URL
                  </Text>
                  <LabelWrapper>
                    <SearchInput onChange={handleChangeQuery} placeholder="Logo URL*" />
                  </LabelWrapper>
                </RowBox>

                <RowBoxx>
                  <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
                    Website
                  </Text>
                  <LabelWrapper>
                    <SearchInput onChange={handleChangeQuery} placeholder="Website" />
                  </LabelWrapper>
                </RowBoxx>
              </Container>

              <Container>
                <RowBox>
                  <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
                    Facebook
                  </Text>
                  <LabelWrapper>
                    <SearchInput onChange={handleChangeQuery} placeholder="Facebook" />
                  </LabelWrapper>
                </RowBox>

                <RowBoxx>
                  <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
                    Twitter
                  </Text>
                  <LabelWrapper>
                    <SearchInput onChange={handleChangeQuery} placeholder="Twitter" />
                  </LabelWrapper>
                </RowBoxx>
              </Container>

              <Container>
                <RowBox>
                  <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
                    Github
                  </Text>
                  <LabelWrapper>
                    <SearchInput onChange={handleChangeQuery} placeholder="Github" />
                  </LabelWrapper>
                </RowBox>

                <RowBoxx>
                  <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
                    Telegram
                  </Text>
                  <LabelWrapper>
                    <SearchInput onChange={handleChangeQuery} placeholder="Telegram" />
                  </LabelWrapper>
                </RowBoxx>
              </Container>

              <Container>
                <RowBox>
                  <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
                    Instagram
                  </Text>
                  <LabelWrapper>
                    <SearchInput onChange={handleChangeQuery} placeholder="Instagram" />
                  </LabelWrapper>
                </RowBox>

                <RowBoxx>
                  <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
                    Discord
                  </Text>
                  <LabelWrapper>
                    <SearchInput onChange={handleChangeQuery} placeholder="Discord" />
                  </LabelWrapper>
                </RowBoxx>
              </Container>

              <Container>
                <RowBox>
                  <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
                    Reddit
                  </Text>
                  <LabelWrapper>
                    <SearchInput onChange={handleChangeQuery} placeholder="Reddit" />
                  </LabelWrapper>
                </RowBox>

                <RowBoxx>
                  <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
                    Youtube
                  </Text>
                  <LabelWrapper>
                    <SearchInput onChange={handleChangeQuery} placeholder="Youtube Video" />
                  </LabelWrapper>
                </RowBoxx>
              </Container>
              <Description>
                <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
                  Description
                </Text>
                <LabelWrapper>
                  <SearchInput onChange={handleChangeQuery} placeholder="Description" />
                </LabelWrapper>
              </Description>
            
          
       

        <Divider margin="0px" />
        <RowDivider>
          <Button>
            <button onClick={handlePrevStep} className="bottomgreybutton">
              {' '}
              Back{' '}
            </button>
          </Button>
          <Button>
            <button onClick={handleNextStep} className="bottompinkbutton">
              {' '}
              Next{' '}
            </button>
          </Button>
        </RowDivider>
      </MainContainer>
    </AppBody>
  </PageHeader>
)

const Step5 = ({ handlePrevStep }) => (
  <PageHeader>
    <AppBody>
      <MainContainer>
        <AtomBox width="full" alignItems="center" flexDirection="column" padding="24px" borderBottom="1">
          <Heading marginBottom={'5px'} textAlign={'center'} as="h2">
            {' '}
            Step 5 - Finish
          </Heading>
          <Text textAlign={'center'} marginBottom={'5px'} color="textSubtle" fontSize="17px">
            Review your information
          </Text>
        </AtomBox>

       
         
           
              <RowDivider>
                <Text color="textSubtle" fontSize="19px" textAlign="left">
                  Total Tocken
                </Text>
                <h2 className="h2colorstep4">
                  530,875 TN
                </h2>
              </RowDivider>
              <RowDivider >
                <Text color="textSubtle" fontSize="19px" textAlign="left">
                  Factory Address
                </Text>
                <Text className="h2colorstep4">Dx28x71D3dO36bxxd5</Text>
              </RowDivider>
              <RowDivider>
                <Text color="textSubtle" fontSize="19px" textAlign="left">
                  Tocken name
                </Text>
                <Text>Test</Text>
              </RowDivider>
              <RowDivider>
                <Text color="textSubtle" fontSize="19px" textAlign="left">
                  Tocken Symbol
                </Text>
                <Text>TN</Text>
              </RowDivider>
              <RowDivider>
                <Text color="textSubtle" fontSize="19px" textAlign="left">
                  Tocken Decimal
                </Text>
                <Text>18</Text>
              </RowDivider>
              <RowDivider>
                <Text color="textSubtle" fontSize="19px" textAlign="left">
                  Presale rate
                </Text>
                <Text>10 TN</Text>
              </RowDivider>
              <RowDivider>
                <Text color="textSubtle" fontSize="19px" textAlign="left">
                  Listing rate
                </Text>
                <Text >1 TN</Text>
              </RowDivider>
              <RowDivider>
                <Text color="textSubtle" fontSize="19px" textAlign="left">
                  Sale method
                </Text>
                <Text >Public</Text>
              </RowDivider>
              <RowDivider>
                <Text color="textSubtle" fontSize="19px" textAlign="left">
                  Softcap
                </Text>
                <Text >25000 BNB</Text>
              </RowDivider>
              <RowDivider>
                <Text color="textSubtle" fontSize="19px" textAlign="left">
                  Hardcap
                </Text>
                <Text >50000 BNB</Text>
              </RowDivider>
              <RowDivider >
                <Text color="textSubtle" fontSize="19px" textAlign="left">
                  Unsold Token
                </Text>
                <Text>Retund</Text>
              </RowDivider>
              <RowDivider>
                <Text color="textSubtle" fontSize="19px" textAlign="left">
                  Minimum Buy
                </Text>
                <Text>0,1BNB</Text>
              </RowDivider>
              <RowDivider>
                <Text color="textSubtle" fontSize="19px" textAlign="left">
                  Msximum Buy
                </Text>
                <Text >1000000</Text>
              </RowDivider>
              <RowDivider>
                <Text color="textSubtle" fontSize="19px" textAlign="left">
                  Liquidity
                </Text>
                <Text >65%</Text>
              </RowDivider>
              <RowDivider>
                <Text color="textSubtle" fontSize="19px" textAlign="left">
                  Stsrt time
                </Text>
                <Text>2023-01-28T08.00(UTC)</Text>
              </RowDivider>
              <RowDivider>
                <Text color="textSubtle" fontSize="19px" textAlign="left">
                  End time
                </Text>
                <Text >2023-01-31T08.00(UTC)</Text>
              </RowDivider>
              <RowDivider>
                <Text color="textSubtle" fontSize="19px" textAlign="left">
                  Liquidity lockup time
                </Text>
                <Text >10 min</Text>
              </RowDivider>
              <RowDivider>
                <Text color="textSubtle" fontSize="19px" textAlign="left">
                  website
                </Text>
                <Text>www.google.com</Text>
              </RowDivider>
              <RowDivider>
                <Text color="textSubtle" fontSize="19px" textAlign="left">
                  Description
                </Text>
                <Text>Desc</Text>
              </RowDivider>
            
          
       

        <Divider margin="0px" />
        <RowDivider>
          <Button>
            <button className="bottomgreybutton" onClick={handlePrevStep}>
              {' '}
              Back{' '}
            </button>
          </Button>
          <Button>
            <button className="bottompinkbutton"> Submit </button>
          </Button>
        </RowDivider>
      </MainContainer>
    </AppBody>
  </PageHeader>
)

export default MultiStepForm
