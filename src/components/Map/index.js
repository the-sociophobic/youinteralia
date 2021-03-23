import React, { Component } from 'react'

import { StoreContext } from 'components/Store'
import SingleMap from './SingleMap'
import isMobile from 'utils/isMobile'


const spb = {
  name: "spb",
  center: isMobile() ?
    {
      lat: 59.925,
      lng: 30.331,
    }
    :
    {
      lat: 59.93,
      lng: 30.36,
    },
  zoom: isMobile() ? 12 : 13,
  maxZoom: 15 + 1,
  minZoom: 15 - 3,
  restriction: {
    latLngBounds: {
      north: 59.95 + .2,
      south: 59.95 - .35,
      east: 30.33 + .3,
      west: 30.33 - .5,
    },
  }
}
const gen = {
  name: "gen",
  center: isMobile() ?
    {
      lat: 46.20521773163431,
      lng: 6.14202970185338,
    }
    :
    {
      lat: 46.20791773163431,
      lng: 6.14602970185338,
    },
  zoom: isMobile() ? 14 : 15,
  maxZoom: 17 + 1,
  minZoom: 17 - 3,
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

  renderCity = props =>
    <SingleMap
      city={props.name}
      className={this.context.currentCity === props.name && "Map--current"}
      {...props}
    />

  render = () =>
    <>
      {this.renderCity({ ...spb, ref: this.context.spbRef })}
      {this.renderCity({ ...gen, ref: this.context.genRef })}
    </>
}
 
export default Map