import React from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom"
import './index.css';
import Login from './components/Auth/Login'
import SignUp from './components/Auth/SignUp' 
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Product from './components/Product/Product';
import Verification from './components/Auth/Verification'
import Sidebar from './components/Product/Sidebar/TechSpecSidebar';


function App() {
return (<>
    <BrowserRouter> 
      <Routes>

        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/verification" element={<Verification/>} />
        
        <Route path='/' element={<Layout><Home/></Layout>}/>
        <Route path='/product' element={<Layout><Product/></Layout>}/>
        <Route path='/sidebar' element={<Sidebar/>}/>

      </Routes>
    </BrowserRouter>
</>);
} 

export default App;
