import React from 'react'

import Ticker from 'components/Ticker'
import Link from 'components/CustomLink'
import { StoreContext } from 'components/Store'
import secondsParse from 'utils/secondsParse'


class Player extends React.Component {

  static contextType = StoreContext

  render = () => {
    const { artist, disableLink } = this.props

    return (
      <div className={`Player ${this.props.className} ${this.props.compact && "Player--compact"}`}>
        <div className="Player__controls">
          <button
            onClick={() => {
              artist.toggleAudio()
              this.props.focus()
            }}
            className={`Player__controls__button ${
              artist.isPlaying && "Player__controls__button--isPlaying"}`}
            disabled={!artist.canPlay}
          />
          <div className="Player__controls__time">
            {secondsParse(artist[artist.isPlaying ? "currentTime" : "duration"])}
          </div>
        </div>

        <div className="Player__text">
          <div className="Player__text__title">
            {artist.title}
          </div>
          <div className="Player__text__artist">
            {artist.name}
          </div>
        </div>

        <Ticker
          className="Player__ticker"
          text={`${artist.title} — ${artist.name}`}
        />

        {!this.props.hideArrow &&
          <Link
            to={`artist/${artist.id}`}
            onClick={() => this.props.focus?.()}
            disabled={disableLink}
          >
            <div className="Player__arrow" />
          </Link>
        }

        <div
          className="Player__bar"
          style={{ width: `${artist.currentTime / artist.duration * 100}%`}}
        />
      </div>
    )
  }
}


export default Player