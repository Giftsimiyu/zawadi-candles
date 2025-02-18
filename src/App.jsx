import React, { useState } from "react";
/*import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";*/

//Imported Components
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Aboutus from "./components/AboutUs";
/*import HomePage from "./components/Home";
import AboutPage from "./components/about";
import ContactPage from "./components/contact";
import ShopPage from "./components/shop";
import BlogPage from "./components/blog";*/

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Aboutus />
      {/*location.pathname === "/" && <Hero />}
      {/*<Switch>
        <Route exact path="/home" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>*/}
      <Footer />
    </>
  );
}

//function AppWrapper() {
/* return (
    <Router>
      <App />
    </Router>
  );
}*/

export default App;
