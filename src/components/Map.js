import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

import {
  PetersbourgStyle,
  GenevaStyle
} from 'components/styles'
import { StoreContext } from 'components/Store'
import Marker from 'components/Marker'


const spb = {
  center: {
    lat: 59.95,
    lng: 30.33,
  },
  zoom: 15,
  maxZoom: 15 + 3,
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
  center: {
    lat: 46.20921773163431,
    lng: 6.15092970185338,
  },
  zoom: 16.8,
  maxzoom: 16.8 + 3,
  minzoom: 16.8 - 3,
  mapStyle: GenevaStyle,
  restriction: {
    latLngBounds: {
      north: 46.20921773163431 + .1,
      south: 46.20921773163431 - .1,
      east: 6.15092970185338 + .2,
      west: 6.15092970185338 - .2,
    },
  }
}


class Map extends Component {
  // state = {
  //   maxZoom: spb.maxZoom,
  //   minZoom: spb.minZoom,
  //   restriction: spb.restriction,
  //   setRestrictions: city =>
  //     this.setState({
  //       maxZoom: city.maxZoom,
  //       minZoom: city.minZoom,
  //       restriction: city.restriction,
  //     })
  // }

  // static getDerivedStateFromProps = (props, state) => {
  //   state.maxZoom = undefined
  //   state.minZoom = undefined
  //   state.restriction = undefined

  //   setTimeout(() => {
  //     const city = state.maxZoom === spb.maxZoom ? gen : spb
  //     state.setRestrictions && state.setRestrictions(city)
  //   }, 100)

  //   return state
  // }

  static contextType = StoreContext

  mapRef = React.createRef()

  componentDidMount = () =>
    this.watchZoomInterval = setInterval(() =>
      this.context && this.mapRef.current &&
        this.context.zoom !== this.mapRef.current.map_.zoom &&
          this.context.setZoom(this.mapRef.current.map_.zoom)
      , 200)

  componentWillUnmount = () =>
    clearInterval(this.watchZoomInterval)


  render() {
    const city = this.props.currentCity === "gen" ? gen : spb

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
              disableDefaultUI: true,
              // maxZoom: this.state.maxZoom,
              // minZoom: this.state.minZoom,
              // restriction: this.state.restriction,
            }}    
          >
            {this.context.artists[this.props.currentCity].map(artist =>
              <Marker
                {...artist}
                mapRef={this.mapRef}
              />
            )}
          </GoogleMapReact>
        </div>
      </div>
    )
  }
}
 
export default Map