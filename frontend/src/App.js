import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebFont from "webfontloader";
import "./App.css";
import Home from "./component/Home/Home";
import Footer from "./component/layout/Footer/Footer";
import Header from "./component/layout/Header/Header";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";
import LoginSignUp from "./component/User/LoginSignUp";
import Profile from "./component/User/Profile";
const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/Search" component={Search} />
        <Route path="/products/:keyword" component={Products} />
        <Route path="/login" component={LoginSignUp} />
        <Route path="/account" component={Profile} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
