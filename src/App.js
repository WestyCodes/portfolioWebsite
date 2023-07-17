import React from 'react';
// import { useNavigate } from 'react-router-dom';

import Header from './header/header.js';
import Main from './main/main.js';
import Footer from './footer/footer.js';

import './App.css';

function App() {
    return (
        <div className="App text-midnightBlue-200">
            <Header />
            <Main />
            {/* <Footer /> */}
        </div>
    );
}

export default App;
