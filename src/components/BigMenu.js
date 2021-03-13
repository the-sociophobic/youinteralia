import React from 'react'

import { withRouter } from 'react-router-dom'

import Link from 'components/CustomLink'
import {
  StoreContext,
  getArtist,
} from 'components/Store'
import Participate from 'pages/Participate'
import Archive from 'pages/Archive'
import Artist from 'pages/Artist'
import About from 'pages/About'
import Privacy from 'pages/Privacy'
import Footer from 'components/Footer'
import ScrollToTop from 'components/ScrollToTop'


class BigMenu extends React.Component {

  static contextType = StoreContext

  scrollRef = React.createRef()

  render = () => {
    let page

    switch (true) {
      case this.props.location.pathname.includes('artist'):
        page = <Artist artist={getArtist(this, this.props.location.pathname.split("/")[2])} />
        break
      case this.props.location.pathname === "/about":
        page = <About />
        break
      case this.props.location.pathname === "/archive":
        page = <Archive />
        break
      case this.props.location.pathname === "/participate":
        page = <Participate />
        break
      case this.props.location.pathname === "/privacy":
        page = <Privacy />
        break
      default:
        break;
    }

    return (
      <ScrollToTop scrollRef={this.scrollRef}>
        <div
          ref={this.scrollRef}
          className={`
            BigMenu
            ${page && "BigMenu--opened"}
            ${this.props.location.pathname.includes("privacy") && "BigMenu--long"}
          `}
        >
          <div className="BigMenu__content">
            <div className="BigMenu__content__header">
              <Link
                to="/"
                className="BigMenu__content__header__close"
              />
            </div>

            <div className="BigMenu__content__container">
              {page}
            </div>

            <Footer />
          </div>
        </div>
      </ScrollToTop>
    )    
  }
}


export default withRouter(BigMenu)