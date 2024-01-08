import './App.css'
import Home from './Components/Home'
import NavBar from './Components/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import About from './Components/About';
import Gallery from './Components/Gallery';
/* import WorkWithUs from './Components/WorkWithUs'; */
import ScrollButton from './Components/ScrollButton';
import ContactFloatingButton from './Components/ContactFloatingButton';
import Footer from './Components/Footer';
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
            {/* <Route path="/WorkWithUs" element={<WorkWithUs />} /> */}
        </Routes>
        <ScrollButton />
        <ContactFloatingButton />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
