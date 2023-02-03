import { AtomBox } from '@pancakeswap/ui'
import { Button, Checkbox, Flex, Heading, Input, Select, Text } from '@pancakeswap/uikit'
import { AppBody } from 'components/App'
import React, { useState } from 'react'
import styled from 'styled-components';






const CreateTocken = () => {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)
  // const [selectedOption, setSelectedOption] = useState('Option 1')


  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');

  const handleInput1Change = event => setInput1(event.target.value);
  const handleInput2Change = event => setInput2(event.target.value);
  const handleInput3Change = event => setInput3(event.target.value);
  const handleInput4Change = event => setInput4(event.target.value);

  return (
    <>
      <Flex marginBottom="4em" width={['328px', , '100%']} height="100%" justifyContent="center">
        <Flex flexDirection="column">


      
            <AtomBox width="full" alignItems="center" flexDirection="column" padding="24px" borderBottom="1">
              <AtomBox display="flex" width="full" alignItems="center" justifyContent="center">
                <Heading as="h2">CREATE  TOKEN</Heading>
              </AtomBox>
              <AtomBox display={'flex'} flexDirection="column">
                <Text color="textSubtle" fontSize="14px" textAlign="left" marginTop={20}> Token Type* </Text>
                <button onClick={toggle} style={{ backgroundColor: '#d0e4fc ',  borderRadius: '5px'  }}>DROPDOWN</button>
                {open && (
                  
                  <ul>
                    <li style={{ backgroundColor: '#f0ecec' }}>Standard Tocken</li>
                    <li style={{ backgroundColor: '#f0ecec' }}>Liquidity Generator Token</li>
                    <li style={{ backgroundColor: '#f0ecec' }}>Baby Token</li>
                    <li style={{ backgroundColor: '#f0ecec' }}>Buyback Baby Token</li>
                  </ul>
                )}
              </AtomBox>
              {/* <select value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select> */}
            </AtomBox>

        
         
            <form>
              <Text color="textSubtle" fontSize="14px" textAlign="left" marginTop={20} width="100px"> Name </Text>
              <input type="text" value={input1} onChange={handleInput1Change} style={{ borderRadius: '5px' }} />
              <Text color="textSubtle" fontSize="14px" textAlign="left" marginTop={20}> Symbol </Text>
              <input type="text" value={input2} onChange={handleInput2Change} style={{ borderRadius: '5px' }} />
              <Text color="textSubtle" fontSize="14px" textAlign="left" marginTop={20}> Decimals </Text>
              <input type="text" value={input3} onChange={handleInput3Change} style={{ borderRadius: '5px' }} />
              <Text color="textSubtle" fontSize="14px" textAlign="left" marginTop={20}> Total supply* </Text>
              <input type="text" value={input4} onChange={handleInput4Change} style={{ borderRadius: '5px' }} /><br />
             <div style={{display:'flex'}}>
              <input type="checkbox" id="checkbox"/>
              <Text>Implement Pink Anti-Bot System?</Text>
              </div>
            </form>
            <div style={{marginTop:'20'}}>
              <Button marginTop={20}>Create Token</Button>
            </div>
         


        </Flex>
      </Flex>

    </>
  )
}

export default CreateTocken
