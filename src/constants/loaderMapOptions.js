
import envVariables from "./envVariables";

const { apiKey } = envVariables;

const googleMapAPIKey = apiKey;

const mapOptions = {
  center: {
    lat: 47.649196,
    lng: -122.350384,
  },
  zoom: 2,
};

const apiOptions = {
  version: "weekly",
  libraries: ["places"],
};

export const mapLoaderOptions = {
  apiKey:googleMapAPIKey,
  divId: "google_map",
  append: true,
  mapOptions: mapOptions,
  apiOptions: apiOptions,
};

