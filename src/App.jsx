import { BrowserRouter } from "react-router-dom";

import Hero from "./components/Hero.jsx"
import Highlights from "./components/Highlights.jsx"
import Navbar from "./components/Navbar.jsx"
import Model from "./components/Model.jsx"
import ScrollToTop from "./components/ScrollToTop.jsx"

import * as Sentry from "@sentry/react";


const App = () => {
  return (
  <BrowserRouter>
    <main className='bg-black'>
      <ScrollToTop/>
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
    </main>
  </BrowserRouter>    
  )
}

export default Sentry.withProfiler(App);