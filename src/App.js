import './App.css';
import { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Features from './Components/Features';
import Gallery from './Components/Gallery';
import Reviews from './Components/Reviews';
import Contact from './Components/Contact';
//DBA601 -- Yellow Color
//222222 -- Grey Black

function App() {

  const [bg, setBg] = useState('');
  function change (e){
    e.preventDefault();
  document.getElementById('background').style.backgroundColor = bg;
}

  return (
    <>
    <div id="background" style={{overflowX:'hidden' , backgroundColor:'#222222'}} >
    <Header />
    <Home />
    <About />
    <Features />
    <Gallery />
    <Reviews />
    <Contact />
    <Footer /> 
    <form onSubmit={change}>
    <input id="here" className="form-control fixed-bottom" type="text" style={{width:'5%', marginLeft:'93%', marginBottom:'2%' , backgroundColor:'#DBA601',height:'6%' , fontSize:'18px'}}
     placeholder="#222222" value={bg} onChange={(e)=>{setBg(e.target.value)}} maxLength="7"/>
     </form>
    </div>
    </>
  );
}

export default App;