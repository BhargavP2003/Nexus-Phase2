import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Service from './Components/Service';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Logo from './Components/Logo';  // Import the Logo component

function App() {
  return (
    <div className="App">
      <Logo />  {/* Add the Logo component here */}
      <Header />
      <Home />
      <About />
      <Service />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
