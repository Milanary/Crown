import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/Pages/Home'; 
import AboutUs from './Pages/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUs from './Pages/ContactUs';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path='/about-us' element={<AboutUs />} />
    <Route path='/contact-us' element={<ContactUs />} />

    </Routes>
  );
}

export default App;
