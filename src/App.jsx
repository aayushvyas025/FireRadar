import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Map from "./components/Map/Map";
import { Toaster } from "react-hot-toast";
import useFetchFireEvents from "./hooks/useFetchFireEvents";

function App() {
  const { fetchingWildFireEvents, events, apiResponse } = useFetchFireEvents();
  
    useEffect(() => {
      fetchingWildFireEvents();
    }, []);
  
  return (
    <>
      <Header />
      <Map wildfireEvents={events} />
      <Footer />
    </>
  );
}

export default App;
