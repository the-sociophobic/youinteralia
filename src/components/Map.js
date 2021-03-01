import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

import {
  PetersbourgStyle,
  GenevaStyle
} from 'components/styles'
import {
  StoreContext,
  getArtists,
} from 'components/Store'
import Marker from 'components/Marker'
import isMobile from 'utils/isMobile'


const spb = {
  name: "spb",
  center: {
    // lat: isMobile() ? 59.939 : 59.939,
    // lng: isMobile() ? 30.368 : 30.338,
    lat: 59.925,
    lng: 30.331,
  },
  // zoom: isMobile() ? 13.1 : 14.25,
  zoom: 12,
  maxZoom: 15 + 1,
  minZoom: 15 - 3,
  mapStyle: PetersbourgStyle,
  restriction: {
    latLngBounds: {
      north: 59.95 + .15,
      south: 59.95 - .18,
      east: 30.33 + .3,
      west: 30.33 - .3,
    },
  }
}
const gen = {
  name: "gen",
  center: {
    // lat: 46.20921773163431,
    // lng: 6.15092970185338,
    lat: 46.20521773163431,
    lng: 6.14202970185338,
  },
  zoom: 14,
  maxZoom: 17 + 1,
  minZoom: 17 - 3,
  mapStyle: GenevaStyle,
  restriction: {
    latLngBounds: {
      north: 46.20921773163431 + .05,
      south: 46.20921773163431 - .07,
      east: 6.15092970185338 + .09,
      west: 6.15092970185338 - .09,
    },
  }
}


class Map extends Component {

  static contextType = StoreContext

  spbRef = React.createRef()
  genRef = React.createRef()

  componentDidMount = () =>
    this.watchZoomInterval = setInterval(() => {
      const mapRef = this.context.currentCity === "spb" ? this.spbRef : this.genRef

      this.context && mapRef.current &&
        this?.context?.zoom !== mapRef?.current?.map_?.zoom &&
          this?.context?.setZoom?.(mapRef?.current?.map_?.zoom)
    }, 100)

  componentWillUnmount = () =>
    clearInterval(this.watchZoomInterval)

  renderCity = city =>
    <div className={`Map ${this.context.currentCity === city.name && "Map--current"}`}>
      <div style={{ height: '110%', width: '100%' }}>
        <GoogleMapReact
          ref={this[`${city.name}Ref`]}
          bootstrapURLKeys={{ key: "AIzaSyDtnk19nAsbs98Rx81bCzvkF5jyD0o7W4w" }}
          center={city.center}
          zoom={city.zoom}
          options={{
            styles: city.mapStyle,
            disableDefaultUI: true,
            maxZoom: city.maxZoom,
            minZoom: city.minZoom,
            restriction: city.restriction,
          }}    
        >
          {getArtists(this, city.name, this.context.currentCity === "gen" ? "eng" : "rus")
            .map(artist =>
              <Marker
                key={artist.id}
                lat={artist.lat}
                lng={artist.lng}
                artist={artist}
                mapRef={this[`${city.name}Ref`]}
              />
          )}
        </GoogleMapReact>
      </div>
    </div>

  render = () =>
    <>
      {this.renderCity(spb)}
      {this.renderCity(gen)}
    </>
}
 
export default Map