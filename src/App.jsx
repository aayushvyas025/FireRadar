import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Map from "./components/Map/Map";

function App() {
  return (
    <>
      <Header />
      <Map
        center={[28.6139, 77.209]}
        zoom={13}
        style={{ height: "100vh", width: "100%" }}
        maxBounds={[
          [-90, -180],
          [90, 180],
        ]}
      />
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
