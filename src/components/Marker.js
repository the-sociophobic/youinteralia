import React from 'react'

import Player from 'components/Player'
import Link from 'components/CustomLink'


const Marker = props =>
  <div className={`
    Marker
    Marker--${props.artist.city}
    ${props.zoom <= (props.city === "spb" ? 12 : 14) && "Marker--small"}
  `}>
    <Link
      to={`/artist/${props.artist.id}`}
      onClick={() => props.focus()}
      disabled={props.disableLink}
    >
      <div className={`Marker__dot`} />
    </Link>

    <Player
      compact={true}
      className={props.zoom <= (props.city === "spb" ? 13 : 15) && "Player--hidden"}
      artist={props.artist}
      focus={props.focus}
      disableLink={props.disableLink}
    />
  </div>


export default Marker