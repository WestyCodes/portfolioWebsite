import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import Header from './header/header.js';
import Main from './main/main.js';
// import Footer from './footer/footer.js';

import './App.css';
import CaddysHackPage from './caddysHackPage/caddysHackPage.js';

function App() {
    return (
        <div className="App text-midnightBlue-200">
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/caddyshack" element={<CaddysHackPage />} />
            </Routes>
            {/* <Footer /> */}
        </div>
    );
}

export default App;
