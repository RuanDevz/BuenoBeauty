import React, { useEffect } from 'react'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Combos from './Components/Combos/Combos'
import Newsletter from './Components/Newsletter/Newsletter'
import Profissional from './Components/Profissional/Profissional'
import Depoiments from './Components/Depoiments/Depoiments'
import ContactUs from './Components/ContactUs/ContactUs'
import Footer from './Components/Footer/Footer'
import AOS from 'aos'

const App = () => {

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if(isMobile){
      AOS.init({ duration: "500", offset: 300});
    }else{
      AOS.init({ duration: "500", offset: 700});
    }

  }, []);
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Services />
      <Combos />
      <Newsletter />
      <Profissional />
      <Depoiments />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App
