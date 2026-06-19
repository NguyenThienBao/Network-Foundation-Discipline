// Import the default component AND the named type from the same file
import Home from './pages/Home'
import './css/App.css';
import { Routes, Route } from 'react-router-dom';
import Favorite from './pages/Favorite';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/favorite" element={<Favorite />}/>
        </Routes>
      </main>
    </>
  );
}

export default App;