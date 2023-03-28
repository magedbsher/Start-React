import React from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Portofolio from '../Portofolio/Portofolio'
import Start from '../Start/Start'

export default function Home() {
  return (
    <>
       
        <Start />
        <Portofolio/>
        <About/>
        <Contact/>
       
    </>
  )
}
