import React from 'react';

const Logo = () => {
  return (
    <div style={logoContainerStyle}>
      <h1 style={logoStyle}>Techy Software</h1>
    </div>
  );
};

const logoContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '150px',
  backgroundColor: '#282c34',
  borderRadius: '50px',
  margin: '20px',
};

const logoStyle = {
  fontFamily: "'Dancing Script', cursive",
  fontSize: '3rem',
  color: '#61dafb',
};

export default Logo;
