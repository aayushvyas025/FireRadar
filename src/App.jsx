import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Map from "./components/Map/Map";
import { Toaster } from "react-hot-toast";
import useFetchFireEvents from "./hooks/useFetchFireEvents";
import MapSkeleton from "./components/Skeleton/MapSkeleton";

function App() {
  const { fetchingWildFireEvents, events, apiResponse } = useFetchFireEvents();

  useEffect(() => {
    fetchingWildFireEvents();
  }, []);

  return (
    <>
      <Header />
      <Map wildfireEvents={events} loading={apiResponse.loading}  />
      <Footer />
    </>
  );
}

export default App;
