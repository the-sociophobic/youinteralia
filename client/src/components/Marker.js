import React from 'react'

import Player from 'components/Player'
import Link from 'components/CustomLink'


const Marker = props =>
  <div
    className={`
      Marker
      Marker--${props.artist.city}
      ${props.zoom <= (props.city === "spb" ? 12 : 14) && "Marker--small"}
    `}
  >
    <div className={`Marker__dot`} />

    <Player
      className={props.zoom <= (props.city === "spb" ? 13 : 15) && "Player--hidden"}
      compact={true}
      {...props}
    />
  </div>


export default Marker