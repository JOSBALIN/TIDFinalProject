import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Management from './pages/Management.js';
import CarPrem from './pages/CarPrem.js';
import Sidebar from "./components/sidebar.js";
import NavBar from './components/navbar.js';

//Returns contents of our app, including the navigation bar, side bar and the three pages.
export default function App() {
    return (
      <Router>
        <div>
        <NavBar/>
        <Sidebar/>
        <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route path='/management' element={<Management/>}></Route>
            <Route path='/carprem' element={<CarPrem/>}></Route>
        </Routes>
        </div>
      </Router>
    );
}

