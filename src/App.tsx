import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Navigation from './components/Pages/Shared/Navigation/Navigation';
import MyCart from './components/Pages/MyCart/MyCart';
import AddProduct from './components/Pages/AddProduct/AddProduct';
import Login from './components/Pages/Login/Login';
import Footer from './components/Pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="App" style={{fontFamily: 'Poppins'}}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/home' element={ <Home /> } />
          <Route path='/myCart' element={ <MyCart /> } />
          <Route path='/addProduct' element={ <AddProduct /> } />
          <Route path='/login' element={ <Login /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
