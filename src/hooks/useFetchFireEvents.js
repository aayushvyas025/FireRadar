import { useState } from "react";
import fetchWildFireEvents from "../apis/nasa_api/fetchWildFireEvents";

function useFetchFireEvents() {
  const [apiResponse, setApiResponse] = useState({
    loading: false,
    error: false,
    success: false,
    message: "",
  });
  const [events, setEvents] = useState([]);

  async function fetchingWildFireEvents() {
    setApiResponse((state) => ({ ...state, loading: true }));
    try {
      const { success, message, data } = await fetchWildFireEvents();
      if (!success) {
        setApiResponse((state) => ({
          ...state,
          loading: false,
          error: true,
          success: false,
          message,
        }));
        return;
      }
      setEvents(data);
      setApiResponse((state) => ({
        ...state,
        loading: false,
        error: false,
        success: true,
        message,
      }));
    } catch (error) {
      console.error(`Error, while fetching wild fire events`);
      setApiResponse((state) => ({
        ...state,
        loading: false,
        error: true,
        success: false,
        message: error.message,
      }));
    }
  }

  return { apiResponse, events, fetchingWildFireEvents };
}

export default useFetchFireEvents;
