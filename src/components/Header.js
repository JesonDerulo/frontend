import React from 'react';

function Header() {

  const listItemStyle = {
    padding: '10px 20px',
    display: 'inline',
    // Add more styles as needed
  }
  return (
    <div>
      <ul>
        <li style={listItemStyle}>Home</li>
        <li style={listItemStyle}>Username</li>
      </ul>
    </div>
  );
}

export default Header;