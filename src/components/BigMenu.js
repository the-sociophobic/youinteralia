import React from 'react'

import {
  Link,
  withRouter,
} from 'react-router-dom'

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


class BigMenu extends React.Component {

  static contextType = StoreContext

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
      <div className={`BigMenu ${page && "BigMenu--opened"}`}>
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
    )    
  }
}


export default withRouter(BigMenu)