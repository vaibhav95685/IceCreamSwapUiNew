import React, { useState } from 'react';

function ExampleForm() {
  const [selectedValue, setSelectedValue] = useState('Enable');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <form>
      <div style={{ display: 'inline-block',marginTop:"15px" }}>
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
          style={{
            display: 'inline-block',
            width: '20px',
            height: '20px',
            background: '#fff',
            border: '2px solid #f8567f',
            borderRadius: '50%',
            cursor: 'pointer',
            padding:"10px",
            position: 'relative',
          }}
        >
          {selectedValue === 'Enable' && (
            <span
              style={{
                position: 'absolute',
                top: '4px',
                left: '4px',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                
                background: '#f8567f',
              }}
            />
          )}
        </label>
        <span style={{
            
            
            padding:"10px",
            color:"#7c6cac"
           
          }}>
        Enable
        </span>
      </div>
      <div style={{ display: 'inline-block' ,marginTop:"15px",marginLeft:"20px" }}>
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
          style={{
            display: 'inline-block',
            width: '20px',
            height: '20px',
            background: '#fff',
            border: '2px solid #f8567f',
            borderRadius: '50%',
            cursor: 'pointer',
            padding:"10px",
            position: 'relative',
          }}
        >
          {selectedValue === 'Disable' && (
            <span
              style={{
                position: 'absolute',
                top: '4px',
                left: '4px',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: '#f8567f',
              }}
            />
          )}
        </label>
        <span style={{
            
            
            padding:"10px",
            color:"#7c6cac"
          }}>
        Disable
        </span>
      </div>
      
    </form>
  );
}

export default ExampleForm;