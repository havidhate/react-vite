import React from "react";
import { useGeoLocation } from "../hooks/useGeoLocation";
import Map, { Marker } from "react-map-gl";

const MAPBOX_TOKEN = "YOUR_MAPBOX_ACCESS_TOKEN"; // 🔥 Replace this with your real Mapbox token

function MapView() {
  const location = useGeoLocation();

  if (!location) {
    return <p>Fetching location...</p>;
  }

  return (
    <div style={{ width: "100%", height: "80vh" }}>
      <Map
        initialViewState={{
          longitude: location.lng,
          latitude: location.lat,
          zoom: 14,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <Marker longitude={location.lng} latitude={location.lat} color="red" />
      </Map>
    </div>
  );
}

export default MapView;
