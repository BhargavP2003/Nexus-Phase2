import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <a href="#home" className="option" style={linkStyle}>Home</a>
        <a href="#about" className="option" style={linkStyle}>About</a>
        <a href="#services" className="option" style={linkStyle}>Services</a>
        <a href="#blog" className="option" style={linkStyle}>Blog</a>
        <a href="#contact" className="option" style={linkStyle}>Contact</a>
      </nav>
    </header>
  );
};

const headerStyle = {
  backgroundColor: '#20232a',
  padding: '20px',
  textAlign: 'center',
};

const navStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  listStyle: 'none',
  margin: '0',
  padding: '0',
};

const linkStyle = {
  color: '#61dafb',
  textDecoration: 'none',
  fontSize: '1.2rem',
  transition: 'transform 0.3s ease-in-out',
};

export default Header;
