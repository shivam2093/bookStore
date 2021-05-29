import React, { Fragment, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HeaderNav from './components/HeaderNav'
import Home from './Home'
import Sp from './timer'
import auth from "./firebase";
import {useStateValue} from './Provider'
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import Login from './components/Login';
import Order from './components/Order';
import Checkout from "./components/Checkout";
import Title from './components/Title'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Payment from './components/Payment'
import OrderHistory from "./components/OrderHistory";

const promise = loadStripe('pk_test_51ImFeiEJhVi2lRqcwghMuNDT7sdwYkUPIhTzdjHVXp5mFEqoTlcboRrTlx1I8gikNLHmwlJ4lAH3rqZh2RLueVfx0088rgadsM');

function App() {
  Sp();

  const [{ }, dispatch] = useStateValue();


  useEffect(() => {

    auth.onAuthStateChanged((authUser) => {
      console.log('The user is', authUser)
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName

        });
      }
      else {

        dispatch({

          type: "SET_USER",
          user: null
        });
      }

    })



  }, []);



  return (
    <Router>
    <div className="App">
        <Switch>
          <Route exact path="/">
            <HeaderNav/>
            <Home />
            <Footer/>
          </Route>
          <Route path="/MainPage">
            <HeaderNav/>
            <MainPage/>
          </Route>
          <Route path="/OrderHistory">
        <HeaderNav/>
            <OrderHistory />
            <Footer/>
          </Route>
          <Route path="/checkout">
            <HeaderNav/>
            <Title
              title="Secure Checkout" />
            <Checkout />
          </Route>
          <Route exact path="/payment">
            <HeaderNav />
            <Title
              title="Payment" />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/Order/:id" component={Order}></Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
