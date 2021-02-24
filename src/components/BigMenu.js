import React from 'react'

import Link from 'components/Link'
import ExternalLink from 'components/ExternalLink'
import {
  StoreContext,
  FormattedMessage,
  getMessage,
  getArtist,
} from 'components/Store'
import Particapate from 'pages/Particapate'
import Archive from 'pages/Archive'
import Artist from 'pages/Artist'
import About from 'pages/About'
import Footer from 'components/Footer'


class BigMenu extends React.Component {

  static contextType = StoreContext

  render = () => {
    let page

    switch (true) {
      case this.context.URL.includes('artist'):
        page = <Artist artist={getArtist(this, this.context.URL.split(':')[1])} />
        break
      case this.context.URL === "about":
        page = <About />
        break
      case this.context.URL === "archive":
        page = <Archive />
        break
      case this.context.URL === "particapate":
        page = <Particapate />
        break
      default:
        break;
    }

    return (
      <div className={`BigMenu ${page && "BigMenu--opened"}`}>
        <div className="BigMenu__content">
          <div className="BigMenu__content__header">
            <div
              className="BigMenu__content__header__close"
              onClick={() => this.context.setURL("")}
            />
          </div>

          <div className="BigMenu__content__container">
            {page}
          </div>

          <Footer />
        </div>
      </div>
    )    
  }
}


export default BigMenu
