import React from "react";
import "./components/Styles/imports.scss";
import NavBar from "./components/Home/NavBar/NavBar";
import Footer from "./components/Home/Footer/Footer";
import Page from "./components/Home/Main/Page";

function App() {
  return (
    <div className="App">
      <NavBar /> <br />
      <Page />
      <Footer />
    </div>
  );
}

export default App;
