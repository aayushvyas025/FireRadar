import React from 'react'
import "./App.css"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Map from './components/Map/Map'

function App() {
  return (
    <div>
      <Header/>
      <Map />
      <Footer />
    </div>
  )
}

export default App