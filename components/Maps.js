import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

export default function Maps() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API
  });

  if (!isLoaded) return <div>Loading...Map</div>;

  function Map() {
    const center = useMemo(() => ({ lat: 14.581121224925319, lng: 120.97619454007483 }), []); 

    return (
      <GoogleMap zoom={14} center={center} mapContainerClassName="map-container">
        <Marker position={{ lat: 14.581121224925319, lng: 120.97619454007483 }} />
      </GoogleMap>
    );
  }

  return <Map />;
}
