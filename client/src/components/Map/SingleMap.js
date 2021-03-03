import React, { Component } from 'react'

import GoogleMapReact from 'google-map-react'

import style from './style'
import {
  StoreContext,
  getArtists,
} from 'components/Store'
import Marker from 'components/Marker'
import clamp from 'utils/clamp'


class Map extends Component {

  state = {
    center: this.props.center,
    zoom: this.props.zoom,
  }

  onChange = e =>
    this.setState({ ...e })

  static contextType = StoreContext

  mapRef = React.createRef()

  zoom = offset =>
    this.setState({
      zoom: clamp(
        this.state.zoom + offset,
        this.props.minZoom,
        this.props.maxZoom
      )
    })


  renderArtist = props =>
    <Marker
      key={props.key}
      lat={props.lat}
      lng={props.lng}
      artist={props}
      mapRef={this.mapRef}
      center={this.state.center}
      zoom={this.state.zoom}
      city={this.props.city}
      secondaryMarker={props.secondaryMarker}
      focus={props.focus}
    />

  renderArtists = () =>
    getArtists(this, this.props.city, this.props.locale)
    .map(artist =>
      artist.multiplePoints ? 
        [
          this.renderArtist({
            ...artist,
            key: artist.id,
            focus: () => this.setState({
              zoom: this.props.city === "spb" ? 16 : 18,
              center: {
                lat: artist.lat,
                lng: artist.lng,
              }
            })
          }),
          ...artist.multiplePoints.map((point, index) =>
            this.renderArtist({
              ...artist,
              key: `${artist.id}.${index}`,
              lat: point[0],
              lng: point[1],
              secondaryMarker: true,
              focus: () =>
                this.setState({
                  zoom: this.props.city === "spb" ? 16 : 18,
                  center: {
                    lat: artist.lat,
                    lng: artist.lng,
                  }
                })
            })
          )
        ]
        :
        this.renderArtist({
          ...artist,
          key: artist.id,
          focus: () =>
            this.setState({
              zoom: this.props.city === "spb" ? 16 : 18,
              center: {
                lat: artist.lat,
                lng: artist.lng,
              }
            })
        })
    ).reduce((a, b) =>
      Array.isArray(a) ?
        Array.isArray(b) ?
          [...a, ...b]
          :
          [...a, b]
        :
        Array.isArray(b) ?
          [a, ...b]
          :
          [a, b]
    )

  render = () =>
    <div className={`Map ${this.props.className}`}>
      <div style={{ height: '110%', width: '100%' }}>
        <GoogleMapReact
          ref={this.mapRef}
          bootstrapURLKeys={{ key: "AIzaSyDtnk19nAsbs98Rx81bCzvkF5jyD0o7W4w" }}
          center={this.state.center}
          zoom={this.state.zoom}
          options={{
            styles: style,
            disableDefaultUI: true,
            maxZoom: this.props.maxZoom,
            minZoom: this.props.minZoom,
            restriction: this.props.restriction,
          }}
          onChange={e => this.onChange(e)}

          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={() => this.context.setMapLoaded()}
          onTilesLoaded={() => this.context.setMapLoaded()}
        >
          {this.renderArtists()}
        </GoogleMapReact>
      </div>
      <button
        className="Map__zoom Map__zoom--in"
        onClick={() => this.zoom(+1)}
      >
        +
      </button>
      <button
        className="Map__zoom Map__zoom--out"
        onClick={() => this.zoom(-1)}
      >
        -
      </button>
    </div>

}
 
export default Map