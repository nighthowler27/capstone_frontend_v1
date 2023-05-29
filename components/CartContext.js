import {createContext, useEffect, useState} from "react";

export const CartContext = createContext({});

export function CartContextProvider({children}) {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [cartProducts,setCartProducts] = useState([]);
  useEffect(() => {
    if (cartProducts?.length > 0) {
      ls?.setItem('cart', JSON.stringify(cartProducts));
    }
  }, [cartProducts]);
  useEffect(() => {
    if (ls && ls.getItem('cart')) {
      setCartProducts(JSON.parse(ls.getItem('cart')));
    }
  }, []);
  function addProduct(productId) {
    setCartProducts(prev => [...prev,productId]);
  }
  // function removeProduct(productId) {
  //   setCartProducts(prev => {
  //     const pos = prev.indexOf(productId);
  //     if (pos !== -1) {
  //       return prev.filter((value,index) => index !== pos);
  //     }
  //     return clearCart();
  //   });
  // }
  // function removeProduct() {
  //   setCartProducts(prev => {
  //     const newCart = [...prev]; // Create a copy of the cart array
  //     newCart.pop(); // Remove the last element from the array
  //     return newCart;
  //   });
  // }
  function removeProduct() {
    setCartProducts([]);
    ls?.removeItem('cart');
  }
  function clearCart() {
    setCartProducts([]);
  }
  return (
    <CartContext.Provider value={{cartProducts,setCartProducts,addProduct,removeProduct,clearCart}}>
      {children}
    </CartContext.Provider>
  );
}