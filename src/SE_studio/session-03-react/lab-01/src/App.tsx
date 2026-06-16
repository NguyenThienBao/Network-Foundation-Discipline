// import React
import React from 'react'

// import project components
import Header from './components/Header'
import Footer from './components/Footer'
import Clock from './components/Clock'

// import css file
import './App.css'

// Define function with type React.FC
const App : React.FC = () => {

  // function component 
  return (
    <>
      <Header title="this is the title of the Header Component"/>
      <Footer message="This is the message in Footer" />
      <Clock state={Date.now}/>
    </>
  )
}

export default App