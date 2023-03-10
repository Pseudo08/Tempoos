import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import {useLayoutEffect} from 'react';
import Layout from './Layout.jsx'
import HomePage from './HomePage.jsx';
import AboutPage from './AboutPage.jsx';
import ContactPage from './ContactPage.jsx';
import Products from './Products.jsx';

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 
const App = ()=> {
  return (
  <BrowserRouter>
      <Wrapper>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path ="products" element={<Products/>}/>
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </Wrapper>
    </BrowserRouter>
  )
}

export default App;