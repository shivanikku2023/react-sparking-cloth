import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// the following components are loaded by default
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProductDetails from '../pages/Products/ProductDetails';
import ContactUsPage from '../pages/ContactUsPage/ContactUsPage';

// the following components are lazy loaded
const Products = React.lazy(() => import('../pages/Products/Products'));
const History = React.lazy(() => import('../pages/About/History'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div className="spinner-border"></div>}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products">
          <Route path=":id" element={<ProductDetails />} />
          <Route index element={<Products />} />
        </Route>
        <Route path="/about-us" element={<About />}></Route>
        <Route path="/about-us/history" element={<History />} />
        <Route path="/contact-us" element={<ContactUsPage />}></Route>
        <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="./404" />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
