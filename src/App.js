import {useState} from 'react'
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {

  const [cartIsShown,setCartIsShown] = useState(false);

  function hideCartHandler()
  {
    setCartIsShown(false);
  }
  

  function showCartHandler()
  {
    setCartIsShown(true);
  }

  return (
    <CartProvider>    {/*innehåller CartReducer*/}
      {cartIsShown &&  <div>Cart....</div>} {/*<div>Cart...</div>*/}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
