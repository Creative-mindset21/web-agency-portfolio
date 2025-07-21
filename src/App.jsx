import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App