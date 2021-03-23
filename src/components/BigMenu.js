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
import Admin from 'pages/Admin'
import Thanks from 'pages/Thanks'
import Privacy from 'pages/Privacy'

import Footer from 'components/Footer'
import ScrollToTop from 'components/ScrollToTop'


class BigMenu extends React.Component {

  static contextType = StoreContext

  scrollRef = React.createRef()

  render = () => {
    let page
    const { pathname } = this.props.location

    switch (true) {
      case pathname.includes('artist'):
        page = <Artist artist={getArtist(this, pathname.split("/")[2])} />
        break
      case pathname === "/about":
        page = <About />
        break
      case pathname.includes('archive'):
        page = <Archive />
        break
      case pathname === "/participate":
        page = <Participate />
        break
      case pathname === "/privacy":
        page = <Privacy />
        break
      case pathname === "/admin":
        page = <Admin />
        break
      case pathname === "/thanks":
        page = <Thanks />
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
            ${(this.props.location.pathname.includes("privacy") || this.props.location.pathname.includes("archive")) && "BigMenu--long"}
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

            {!this.props.location.pathname.includes("archive") && <Footer />}
          </div>
        </div>
      </ScrollToTop>
    )    
  }
}


export default withRouter(BigMenu)