import './App.css'
import Home from './Components/Home'
import SocialMediaIcons from './Components/SocialMediaIcons'
import NavBar from './Components/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import About from './Components/About';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import WorkWithUs from './Components/WorkWithUs';
function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/About" element={<About />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/WorkWithUs" element={<WorkWithUs />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
