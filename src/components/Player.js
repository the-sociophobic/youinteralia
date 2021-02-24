import React from 'react'
import Ticker from 'react-ticker'

import Link from 'components/Link'
import { StoreContext } from 'components/Store'
import secondsParse from 'utils/secondsParse'


class Player extends React.Component {

  static contextType = StoreContext

  render = () => {
    const { artist } = this.props

    return (
      <div className={`Player ${this.props.className} ${this.props.compact && "Player--compact"}`}>
        <div className="Player__controls">
          <button
            onClick={() =>
              artist.toggleAudio()}
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

        <div className="Player__ticker">
          <Ticker
            mode="await"
            speed={4}
          >
            {({index}) =>
              <div className="Player__ticker__content">
                {artist.title} — {artist.name}
              </div>
            }
          </Ticker>
        </div>

        {!this.props.hideArrow &&
          <Link to={`artist:${artist.id}`}>
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