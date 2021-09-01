import React from "react";
import "./Home.css";
import Hero from "./Hero";
import { useHistory } from "react-router-dom";

const Home = () => {
  let history = useHistory();
    
  const goToStore = ()=> {
      history.push("./Shoe")
  }
  return (
    <div className="home">
      <Hero />
      <div className="home_content">
        <h2>Kalla Chitta Shoe Store</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          voluptatem officiis minus rerum, obcaecati ut, provident quaerat
          voluptatum, soluta illum rem fuga. Repellendus minima, similique iure
          doloremque beatae in illum?
        </p>
        <button id="button1" onClick={goToStore}>Visit Store </button>
      </div>
    </div>
  );
};

export default Home;
