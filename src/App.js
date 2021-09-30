import React from 'react'
import AppHeader from './components/AppHeader';
import Biography from './components/Biography';
import SVG from './components/SVG';
import AutoWriteText from './components/AutoWriteText';
import Expertise from './components/Expertise';
import Projects from './components/Projects'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <AutoWriteText/>
      <Biography/>
      <SVG/>
      <Expertise/>
      <Projects />
      <Footer/>
    </div>
  );
}

export default App;
