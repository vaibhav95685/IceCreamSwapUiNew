import React, { useState } from 'react';

function ExampleForm() {
  const [selectedValue, setSelectedValue] = useState('Enable');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <form>
      <div className='radiostep2'>
        <input
          type="radio"
          name="example"
          value="Enable"
          checked={selectedValue === 'value1'}
          onChange={handleChange}
          id="Enable"
          style={{
            display: 'none',
          }}
        />
        <label
          htmlFor="Enable"
          className='labelstep2'
        >
          {selectedValue === 'Enable' && (
            <span className='span1step2'/>
          )}
        </label>
        <span className='span2step2'>
        Enable
        </span>
      </div>
      <div className='div2estep2'>
        <input
          type="radio"
          name="example"
          value="Disable"
          checked={selectedValue === 'Disable'}
          onChange={handleChange}
          id="Disable"
          style={{
            display: 'none',
          }}
        />
        <label
          htmlFor="Disable"
         className='labelstep2'
        >
          {selectedValue === 'Disable' && (
            <span
             className='span1step2'
            />
          )}
        </label>
        <span className='span2step2'>
        Disable
        </span>
      </div>
      
    </form>
  );
}

export default ExampleForm;