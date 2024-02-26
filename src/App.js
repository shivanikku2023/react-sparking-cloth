import './App.scss';
import { HelmetProvider } from 'react-helmet-async';
import { PageContext } from './contexts/PageContext';
import { CartContext } from './contexts/CartContext';
import { useReducer } from 'react';
import { HashRouter } from 'react-router-dom';
import cartReducer from './reducers/cartReducer';
import AppRoutes from './routes/AppRoutes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App () {
  const [cartState, cartDispatch] = useReducer(cartReducer);
  const cart = {
    cartState,
    cartDispatch
  };

  return (
    <HelmetProvider>
      <CartContext.Provider value={cart}>
        <HashRouter>
          <Header />

          <main className="container-fluid mt-5 pt-2">
            <PageContext.Provider value={cart}>
              <AppRoutes />
            </PageContext.Provider>
          </main>

          <Footer />
        </HashRouter>
      </CartContext.Provider>
    </HelmetProvider>
  );
}

export default App;
