import React, { useState, useRef, useEffect } from 'react';

function ExampleDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Pancakeswap');
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
          background: '#372F47',
          color:"grey",
          border: '1px solid #000',
          borderRadius: '10px',
          cursor: 'pointer',
          padding: '10px',
          width: '200px',
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
            background: '#372F47',
          color:"grey",
            border: '1px solid #000',
            borderRadius: '10px',
            listStyle: 'none',
            margin: '0',
            padding: '0',
            position: 'absolute',
            top: '100%',
            left: '0',
            width: '200px',
            zIndex: '1',
          }}
        >
          <li
            style={{
              cursor: 'pointer',
              padding: '10px',
            }}
            onClick={() => handleOptionClick('Pancakeswap')}
          >
          Pancakeswap
          </li>
          <li
            style={{
              cursor: 'pointer',
              padding: '10px',
            }}
            onClick={() => handleOptionClick('Pinkswap Testnet')}
          >
            Pinkswap Testnet
          </li>
          
        </ul>
      )}
    </div>
  );
}

export default ExampleDropdown