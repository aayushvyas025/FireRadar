const CACHE_KEY = "fireRadar_wildfire_events";
const CACHE_TTL = 15 * 60 * 1000;

async function fetchWildFireEvents() {
  const cacheData = localStorage.getItem(CACHE_KEY);

  if (cacheData) {
    // parsing cache json
    const cache = JSON.parse(cacheData);
    // create cache
    const isCacheValid = Date.now() - cache.timestamp < CACHE_TTL;

    if (isCacheValid) {
      console.log("Using cached wildfire data");

      return {
        success: true,
        message: "Wildfire events loaded from cache",
        data: cache.data,
      };
    }
  }

  console.log("Cache expired");

  console.log("Fetching wildfire events from API");
  try {
    const response = await fetch(
      `https://eonet.gsfc.nasa.gov/api/v2.1/events`,
      { cache: "default" },
    );
    if (!response.ok) {
      throw new Error("Failed to fetch wildfire events");
    }
    const data = await response.json();

    const wildfireEvents = data?.events.filter((event) =>
      event?.title.toLowerCase().includes("wildfire"),
    );

    // set the items in filtered data + timestamp
    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ data: wildfireEvents, timestamp: Date.now() }),
    );

    return {
      success: true,
      message: "Wildfire events fetched successfully",
      data: wildfireEvents,
    };
  } catch (error) {
    console.error(`Error While fetching wildfire events api ${error.message}`);
    return {
      success: false,
      message: error.message || "Error, while fetching wildfire events",
      data: null,
    };
  }
}

export default fetchWildFireEvents;
