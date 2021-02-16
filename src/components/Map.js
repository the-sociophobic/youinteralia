import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

import {
  PetersbourgStyle,
  GenevaStyle
} from 'components/styles'


const spb = {
  center: {
    lat: 59.95,
    lng: 30.33,
  },
  zoom: 15,
  mapStyle: PetersbourgStyle,
}
const gen = {
  center: {
    lat: 46.20921773163431,
    lng: 6.15092970185338,
  },
  zoom: 16.8,
  mapStyle: GenevaStyle,
}


class Map extends Component {
  mapRef = React.createRef()

  render() {
    const city = this.props.currentCity == "gen" ? gen : spb

    return (
      <div className="Map">
        <div style={{ height: '110%', width: '100%' }}>
          <GoogleMapReact
            ref={this.mapRef}
            bootstrapURLKeys={{ key: "AIzaSyDtnk19nAsbs98Rx81bCzvkF5jyD0o7W4w" }}
            center={city.center}
            zoom={city.zoom}
            options={{
              styles: city.mapStyle,
              disableDefaultUI: true
            }}    
          >
            {this.props.markers}
          </GoogleMapReact>
        </div>
      </div>
    )
  }
}
 
export default Map