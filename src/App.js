import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header/Header.js';
import Footer from './footer/Footer.js';
import Main from './main/Main.js';

import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
