
import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Header from './components/Header'
import Home from './components/Home';
import Footer from './components/Footer';
import Contant from './components/Contant';
import Services from './components/Services';

import "./styles/App.scss"
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/footer.scss"
import "./styles/contant.scss"



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='/contant'  element={<Contant />}/>
        <Route path='/services'  element={<Services />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App