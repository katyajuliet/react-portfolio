import React from "react";
import Nav from "./components/Navigation/Navigation";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <body>
        <Nav />
        <Portfolio />
        <Footer />
      </body>
    </div>
  );
};

export default App;
