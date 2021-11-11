import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import Home from './pages/Home.js';
import Management from './pages/Management.js';
import CarPrem from './pages/CarPrem.js';

const Main = () => {
    return (
        <Routes>
            <Route exact path='/' element={Home}></Route>
            <Route exact path='/Management' element={Management}></Route>
            <Route exact path='/CarPrem' element={CarPrem}></Route>
        </Routes>
    )
}

export default Main;