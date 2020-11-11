import React from "react";

import {  Switch, Route, Redirect } from "react-router-dom";

// Components
import ProductsList from "./Components/ProductsList";
import ProductDetail from "./Components/ProductDetail";
import Profile from "./Components/Profile";
import Login from "./Login";
import Signup from "./Signup";
import NavBar from "./NavBar";
import OrderList from "./Components/OrderList";
import OrderDetail from "./Components/OrderDetail";
import AddressList from "./Components/AddressList";
import AddAddressForm from "./Components/AddAddressForm";
import CartList from "./Components/CartList";
import CheckoutPage from "./Components/CheckoutPage";

function App() {
  return ( 
  <>
      <NavBar />
      <Switch>
        <Route path="/products/:productID">
          <ProductDetail />
        </Route>
        <Route path="/products/">
          <ProductsList />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/orders/:orderID">
          <OrderDetail />
        </Route>
        <Route path="/orders/">
          <OrderList />
        </Route>
        <Route path="/addresses">
          <AddressList />
        </Route>
        <Route path="/add-address">
          <AddAddressForm />
        </Route>
        <Route path="/cart">
          <CartList />
        </Route>
        <Route path="/checkout">
          <CheckoutPage />
        </Route>
        <Redirect exact from="/logout" to="/login" />
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </>
  );
}

export default App;
