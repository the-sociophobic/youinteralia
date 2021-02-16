import React from 'react'

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import mapStyle from 'utils/map-style'


const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 59.93885913086265,
  lng: 30.32382083323813,
};


function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDtnk19nAsbs98Rx81bCzvkF5jyD0o7W4w"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ?
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        styles: mapStyle,
        disableDefaultUI: true
      }}
    >
      { /* Child components, such as markers, info windows, etc. */ }
      <></>
    </GoogleMap>
    :
    <></>
}


export default React.memo(MyComponent)