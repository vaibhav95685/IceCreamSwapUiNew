import React, { useState, useRef, useEffect } from 'react';

function ExampleDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Standard Token');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [dropdownRef]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div
      ref={dropdownRef}
      style={{
        position: 'relative',
      }}
    >
      <div
        style={{
          background: '#fff',
          border: '1px solid #000',
          borderRadius: '4px',
          cursor: 'pointer',
          padding: '10px',
          width: '738px',
        }}
        onClick={handleToggle}
      >
        {selectedOption}
        <span
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        >
          ▼
        </span>
      </div>
      {isOpen && (
        <ul
          style={{
            background: '#fff',
            border: '1px solid #000',
            borderRadius: '4px',
            listStyle: 'none',
            margin: '0',
            padding: '0',
            position: 'absolute',
            top: '100%',
            left: '0',
            width: '738px',
            zIndex: '1',
          }}
        >
          <li
            style={{
              cursor: 'pointer',
              padding: '10px',
            }}
            onClick={() => handleOptionClick('Standard Token')}
          >
            Standard Token
          </li>
          <li
            style={{
              cursor: 'pointer',
              padding: '10px',
            }}
            onClick={() => handleOptionClick(' Liquidity Generator Token')}
          >
            Liquidity Generator Token
          </li>
          <li
            style={{
              cursor: 'pointer',
              padding: '10px',
            }}
            onClick={() => handleOptionClick(' Baby Token')}
          >
           Baby Token
          </li>
          <li
            style={{
              cursor: 'pointer',
              padding: '10px',
            }}
            onClick={() => handleOptionClick(' Buyback Baby Token')}
          >
          Buyback Baby Token
          </li>
        </ul>
      )}
    </div>
  );
}

export default ExampleDropdown