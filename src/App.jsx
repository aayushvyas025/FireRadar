import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Map from "./components/Map/Map";

function App() {
  return (
    <div>
      <Header />
      <Map
        center={[51.505, -0.09]}
        zoom={13}
        style={{ height: "800px", width: "inherit" }}
      />
      <Footer />
    </div>
  );
}

export default App;
