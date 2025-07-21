import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Hero />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App