import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Map from "./components/Map/Map";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Header />
      <Map />
      <Footer />
    </>
  );
}

export default App;
