import React,{useEffect} from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import FAQ from './components/FAQ';
import Contacts from './components/Contacts';
import Footer from './components/Footer';


function App() {
  return (
    useEffect(() => {
      document.title = 'HackSphere2025'; // ✅ This sets the tab title
    }),
    <div className='App'>
      <Header/>
      <Hero/>
      <About/>
      <FAQ/>
      <Contacts/>
      <Footer/>
    </div>
  )
}

export default App
