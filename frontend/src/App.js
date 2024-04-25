import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import Footer from './components/Footer';

import HomeScreen from './Screens/HomeScreen';
import CartScreen from './Screens/CartScreen';
import ProductScreen from './Screens/ProductScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import ProfileScreen from './Screens/ProfileScreen';
import HomePage from './Screens/HomePage';

const App = () => {
  return (
    <>
      <Router>
        <Container>
        <Routes>
          
            <Route path='/' element={<HomePage />} exact />
            <Route path='/saree' element={<HomeScreen />} exact />
            <Route path='/login' element={<LoginScreen /> } exact />
            <Route path='/register' element={<RegisterScreen /> } exact />
            <Route path='/profile' element={<ProfileScreen /> } exact />
            <Route path='/cart' element={<CartScreen/>} >
              <Route path=':id' element={<CartScreen />}></Route>
              <Route path='' element={<CartScreen />}></Route>
            </Route>
            <Route path='/product/:id' element={<ProductScreen/>}/>
            <Route></Route>
          
        </Routes>
        </Container>
       
      </Router>
    </>
  );
}

export default App;
