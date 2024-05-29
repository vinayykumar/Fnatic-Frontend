import React from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom"
import './index.css';
import Login from './components/Auth/Login'
import SignUp from './components/Auth/SignUp'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';

function App() {
return (<>
    <BrowserRouter> 
      <Routes>

        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        
        <Route path='/' element={<Layout><Home/></Layout>}/>

      </Routes>
    </BrowserRouter>
</>);
} 

export default App;
