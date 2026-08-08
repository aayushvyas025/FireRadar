async function fetchWildFireEvents() {
  try {
    const response = await fetch(
      `https://eonet.gsfc.nasa.gov/api/v2.1/events`,
      { cache: "default" },
    );
    if (!response.ok) {
      throw new Error("Failed to fetch wildfire events");
    }
    const data = await response.json();
    return {
      success: true,
      message: "Wildfire events fetched successfully",
      data: data?.events.filter((event) =>
        event?.title.toLowerCase().includes("wildfire"),
      ),
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
