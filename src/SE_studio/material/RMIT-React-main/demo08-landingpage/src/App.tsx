import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home     from './pages/Home'
import About    from './pages/About'
import Services from './pages/Services'
import Callout  from './pages/Callout'
import Portfolio from './pages/Portfolio'
import Action   from './pages/Action'
import Contact  from './pages/Contact'
import Footer   from './pages/Footer'

const App : React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/callout' element={<Callout/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/action' element={<Action/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/footer' element={<Footer/>}/>
      </Routes>
    </Router>
  )
}

export default App
