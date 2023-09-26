import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import './App.module.css'
import Footer from './components/Footer';
import ModalLogin from './components/ModalLogin';
import AboutUs from './components/AboutUs';
import Product1 from './components/Product1';
import Product2 from './components/Product2';
import Contactus from './components/Contactus';
import FAQ from './components/FAQ';

function App() {
  return (
    <div>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="home" element={<Home/>}></Route>
          <Route path="aboutus" element={<AboutUs/>}></Route>
          <Route path="product1" element={<Product1/>}></Route>
          <Route path="product2" element={<Product2/>}></Route>
          <Route path="contactus" element={<Contactus/>}></Route>
          <Route path="faq" element={<FAQ/>}></Route>

        </Routes>
        <ModalLogin/>
        <Footer/>
    </div>
  );
}

export default App;
