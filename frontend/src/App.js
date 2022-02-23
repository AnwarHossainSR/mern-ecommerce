import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebFont from "webfontloader";
import Home from "./component/Home/Home";
import Footer from "./component/layout/Footer/Footer";
import Header from "./component/layout/Header/Header";
import ProductDetails from "./component/Product/ProductDetails";

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
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
