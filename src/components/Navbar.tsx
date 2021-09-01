import React, { useState } from "react";
import "./Navbar.css";
import { BsViewStacked } from "react-icons/bs";
import { FaRegTimesCircle } from "react-icons/fa";
import { MdShoppingBasket} from "react-icons/md";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Shoe from "../pages/Shoe";
import About from "../pages/About";
import Home from "../pages/Home";
import Cart from "../pages/Cart.js";

const Navbar = () => {
  const [icon, setIcon] = useState(false);
  const [menu, setMenu] = useState(false);

  const showIcon = (e: any) => {
    e.preventDefault();
    setIcon(!icon);
    setMenu(!menu)
  };

  const showMe = () => {
      setIcon(!icon)
      setMenu(!menu)

  };

  return (
    <Router>
      <div className="navbar">
        <div className="log">
          <strong id="strong"> Adidas
          </strong>
         
          
         

         
        </div>
      
        {menu ? (
          <div className="burger__menu">
            <ul>
              <li>
                
                <Link to="/" onClick={showMe}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shoe" onClick={showMe}>
                  Shoe
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={showMe}>
                  About
                </Link>
              </li>
              
                <Link to="/cart" onClick={showMe}>
                  <MdShoppingBasket id="icon1"/>
                </Link>
              
            </ul>
          </div>
        ) : (
          <div className="home__menu">
            <ul id="ico">
              <li id="ico">
                <Link to="/">Home</Link>
              </li>
              <li id="ico">
                <Link to="/shoe">Shoe</Link>{" "}
              </li>
              <li id="ico">
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/cart" id="ico">
                  <MdShoppingBasket id="icon1"/>
                </Link>
              </li>
            </ul>
          </div>
        )}
        {icon ? (
          <FaRegTimesCircle onClick={showIcon} id="icon" />
        ) : (
          <BsViewStacked id="icon" onClick={showIcon} />
        )}
      </div>
      {/* Switch */}

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/shoe">
          <Shoe />
        </Route>

        <Route path="/about">
          <About />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </Router>
  );
};

export default Navbar;
