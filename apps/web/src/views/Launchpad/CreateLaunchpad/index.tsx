import React, { useState } from 'react'
import Radio from './components/Radio'
import { AppBody } from 'components/App'
import { useMemo } from 'react'
import UseVesting from './components/UseVesting'
import { AtomBox } from '@pancakeswap/ui'
import Divider from 'views/Farms/components/Divider'
import { Text, Farm as FarmUI, InputBox, Select, PageHeader, Heading } from '@pancakeswap/uikit'
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
    margin-top: 15px;
  }
`
const RadioButtonGap = styled.div`
   {
    margin-top: 8px;
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


const MultiStepForm = () => {
  

  const [step, setStep] = useState(1)
  const handleNextStep = () => setStep(step + 1)
  const handlePrevStep = () => setStep(step - 1)
  const myFunction = (event: React.ChangeEvent<HTMLInputElement>) => {
    (event.target.value)
  }
  return (
    <div>
      <div className="steps"></div>
      {step === 1 && <Step1 handleNextStep={handleNextStep} myFunction={myFunction} />}
      {step === 2 && <Step2 handleNextStep={handleNextStep} myFunction={myFunction} handlePrevStep={handlePrevStep} />}
      {step === 3 && <Step3 handleNextStep={handleNextStep} myFunction={myFunction} handlePrevStep={handlePrevStep} />}
      {step === 4 && <Step4 handleNextStep={handleNextStep} myFunction={myFunction} handlePrevStep={handlePrevStep} />}
      {step === 5 && <Step5 handlePrevStep={handlePrevStep} myFunction={myFunction} />}
    </div>
  )
}

const Step1 = ({ handleNextStep, myFunction }) => (
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

        <TBG>
          <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
            Token Address
          </Text>
          <LabelWrapper>
            <InputBox onChange={myFunction} placeholder="Enter Token Address" />
          </LabelWrapper>
        </TBG>

        <RadioButtonGap>
          <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
            Currency
          </Text>
          <RadioButtonGap>
            <input className="radioinputstep1" type="radio" id="radioButton1" name="radioGroup" value="option1" />
            <label className="lablestep1">BNB</label>
            <br />
          </RadioButtonGap>
          <RadioButtonGap>
            <input className="radioinputstep1" type="radio" id="radioButton1" name="radioGroup" value="option1" />
            <label className="lablestep1">BUSD</label>
            <br />
          </RadioButtonGap>
          <RadioButtonGap>
            <input className="radioinputstep1" type="radio" id="radioButton1" name="radioGroup" value="option1" />
            <label className="lablestep1">USDC</label>
            <br />
          </RadioButtonGap>
          <RadioButtonGap>
            <input className="radioinputstep1" type="radio" id="radioButton1" name="radioGroup" value="option1" />
            <label className="lablestep1">USDT</label>
            <br />
          </RadioButtonGap>
        </RadioButtonGap>

        <TBG>
          <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
            Fee options
          </Text>
          <RadioButtonGap>
            <input className="radioinputstep1" type="radio" id="radioButton1" name="radioGroup2" value="option1" />
            <label className="lablestep1">5% BNB raised only</label>
            <br />
          </RadioButtonGap>
          <RadioButtonGap>
            <input className="radioinputstep1" type="radio" id="radioButton1" name="radioGroup2" value="option1" />
            <label className="lablestep1">Other</label>
            <br />
          </RadioButtonGap>
        </TBG>

        <TBG>
          <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
            Listing options
          </Text>
          <RadioButtonGap>
            <input className="radioinputstep1" type="radio" id="radioButton1" name="radioGroup3" value="option1" />
            <label className="lablestep1">Auto Listing</label>
            <br />
          </RadioButtonGap>
          <RadioButtonGap>
            <input className="radioinputstep1" type="radio" id="radioButton1" name="radioGroup3" value="option1" />
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

const Step2 = ({ handleNextStep, handlePrevStep, myFunction }) => (
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
          <InputBox onChange={myFunction} placeholder="Presale rate" />
        </LabelWrapper>

        <Text marginTop={'15px'} color="textSubtle" fontSize="17px" textAlign="left">
          Whitelist
        </Text>

        <Radio />

        <Container>
          <RowBox>
            <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
              Softcap (BNB)
            </Text>
            <LabelWrapper>
              <InputBox onChange={myFunction} placeholder="Softcap (BNB)" />
            </LabelWrapper>
          </RowBox>

          <RowBoxx>
            <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
              Hardcap (BNB)
            </Text>
            <LabelWrapper>
              <InputBox onChange={myFunction} placeholder="Hardcap (BNB)" />
            </LabelWrapper>
          </RowBoxx>
        </Container>

        <Container>
          <RowBox>
            <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
              Minimum Buy (BNB)
            </Text>
            <LabelWrapper>
              <InputBox onChange={myFunction} placeholder="Minimum Buy (BNB)" />
            </LabelWrapper>
          </RowBox>

          <RowBoxx>
            <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
              Maximum Buy (BNB){' '}
            </Text>
            <LabelWrapper>
              <InputBox onChange={myFunction} placeholder="Hardcap (BNB)" />
            </LabelWrapper>
          </RowBoxx>
        </Container>
        <Container>
          <RowBox>
          <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
              Liquidity
            </Text>
            <LabelWrapper>
              <InputBox onChange={myFunction} placeholder="Liquidity %" />
            </LabelWrapper>
          </RowBox>

          <RowBoxx>
            <Text marginLeft={'5px'} marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
              Listing
            </Text>
            <LabelWrapper>
              <InputBox onChange={myFunction} placeholder="Listing rate" />
            </LabelWrapper>
          </RowBoxx>
        </Container>
        
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

           
            <Text marginLeft={'5px'} marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
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

const Step3 = ({ handleNextStep, handlePrevStep, myFunction }) => (
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
        <Container>
          <RowBox>
            <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
              Start time (UTC)
            </Text>
            <LabelWrapper>
              <InputBox onChange={myFunction} placeholder="Start time (UTC)" />
            </LabelWrapper>
          </RowBox>

          <RowBoxx>
            <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
              End time (UTC)
            </Text>
            <LabelWrapper>
              <InputBox onChange={myFunction} placeholder="End time (UTC)" />
            </LabelWrapper>
          </RowBoxx>
        </Container>

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

const Step4 = ({ handleNextStep, handlePrevStep, myFunction }) => (
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
              <InputBox onChange={myFunction} placeholder="Logo URL*" />
            </LabelWrapper>
          </RowBox>

          <RowBoxx>
            <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
              Website
            </Text>
            <LabelWrapper>
              <InputBox onChange={myFunction} placeholder="Website" />
            </LabelWrapper>
          </RowBoxx>
        </Container>

        <Container>
          <RowBox>
            <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
              Facebook
            </Text>
            <LabelWrapper>
              <InputBox onChange={myFunction} placeholder="Facebook" />
            </LabelWrapper>
          </RowBox>

          <RowBoxx>
            <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
              Twitter
            </Text>
            <LabelWrapper>
              <InputBox onChange={myFunction} placeholder="Twitter" />
            </LabelWrapper>
          </RowBoxx>
        </Container>

        <Container>
          <RowBox>
            <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
              Github
            </Text>
            <LabelWrapper>
              <InputBox onChange={myFunction} placeholder="Github" />
            </LabelWrapper>
          </RowBox>

          <RowBoxx>
            <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
              Telegram
            </Text>
            <LabelWrapper>
              <InputBox onChange={myFunction} placeholder="Telegram" />
            </LabelWrapper>
          </RowBoxx>
        </Container>

        <Container>
          <RowBox>
            <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
              Instagram
            </Text>
            <LabelWrapper>
              <InputBox onChange={myFunction} placeholder="Instagram" />
            </LabelWrapper>
          </RowBox>

          <RowBoxx>
            <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
              Discord
            </Text>
            <LabelWrapper>
              <InputBox onChange={myFunction} placeholder="Discord" />
            </LabelWrapper>
          </RowBoxx>
        </Container>

        <Container>
          <RowBox>
            <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
              Reddit
            </Text>
            <LabelWrapper>
              <InputBox onChange={myFunction} placeholder="Reddit" />
            </LabelWrapper>
          </RowBox>

          <RowBoxx>
            <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
              Youtube
            </Text>
            <LabelWrapper>
              <InputBox onChange={myFunction} placeholder="Youtube Video" />
            </LabelWrapper>
          </RowBoxx>
        </Container>
        <Description>
          <Text marginBottom={'10px'} color="textSubtle" fontSize="17px" textAlign="left">
            Description
          </Text>
          <LabelWrapper>
            <InputBox onChange={myFunction} placeholder="Description" />
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

const Step5 = ({ handlePrevStep, myFunction }) => (
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
          <h2 className="h2colorstep4">530,875 TN</h2>
        </RowDivider>
        <RowDivider>
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
          <Text>1 TN</Text>
        </RowDivider>
        <RowDivider>
          <Text color="textSubtle" fontSize="19px" textAlign="left">
            Sale method
          </Text>
          <Text>Public</Text>
        </RowDivider>
        <RowDivider>
          <Text color="textSubtle" fontSize="19px" textAlign="left">
            Softcap
          </Text>
          <Text>25000 BNB</Text>
        </RowDivider>
        <RowDivider>
          <Text color="textSubtle" fontSize="19px" textAlign="left">
            Hardcap
          </Text>
          <Text>50000 BNB</Text>
        </RowDivider>
        <RowDivider>
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
          <Text>1000000</Text>
        </RowDivider>
        <RowDivider>
          <Text color="textSubtle" fontSize="19px" textAlign="left">
            Liquidity
          </Text>
          <Text>65%</Text>
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
          <Text>2023-01-31T08.00(UTC)</Text>
        </RowDivider>
        <RowDivider>
          <Text color="textSubtle" fontSize="19px" textAlign="left">
            Liquidity lockup time
          </Text>
          <Text>10 min</Text>
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
