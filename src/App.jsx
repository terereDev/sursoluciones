import Home from './components/Home';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import React from 'react';
import News from './components/News';

function App() {
    return ( 

    <div className = "App" >
        <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="About" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="news" element={<News />} />
            </Routes>
        <Footer></Footer>
    </div>
    );
}

export default App;