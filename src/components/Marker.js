import React from 'react'

import Player from 'components/Player'
import Link from 'components/CustomLink'
import { FormattedMessage } from './Store'


class Marker extends React.Component {
  state = {
    showPopup: false
  }

  togglePopup = () => 
    this.props.secondaryMarker &&
      this.setState({ showPopup: !this.state.showPopup })

  renderPopup = () =>
    this.props.secondaryMarker &&
      <div
        className={`Marker__popup ${this.state.showPopup && "Marker__popup--show"}`}
        onClick={this.togglePopup}
      >
        <FormattedMessage id="Marker.popup" />
      </div>

  render = () =>
    <div
      className={`
        Marker
        Marker--${this.props.artist.city}
        ${this.props.zoom <= (this.props.city === "spb" ? 13 : 15) && "Marker--average"}
        ${this.props.zoom <= (this.props.city === "spb" ? 12 : 14) && "Marker--small"}
        ${this.props.secondaryMarker && "Marker--secondary"}
      `}
    >
      <div
        className={`Marker__dot`}
        onClick={this.togglePopup}
      />

      {this.renderPopup()}

      <Player
        className={this.props.zoom <= (this.props.city === "spb" ? 13 : 15) && "Player--hidden"}
        compact={true}
        {...this.props}
      />
    </div>
}


export default Marker