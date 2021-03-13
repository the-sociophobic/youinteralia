import React from 'react'

import { withRouter } from 'react-router-dom'

import Link from 'components/CustomLink'
import Footer from 'components/Footer'
import Dropdown from 'components/Dropdown'
import {
  StoreContext,
  FormattedMessage,
  getMessage,
  getArtists,
} from 'components/Store'
import ScrollToTop from 'components/ScrollToTop'


class Menu extends React.Component {

  static contextType = StoreContext

  scrollRef = React.createRef()

  componentDidMount = () =>
    this.props.history.listen((location, action) =>
      action == "PUSH" && this.context.setMenu(false))

  toggleLang = () =>
    this.context.setLocale(
      this.context.locale === "eng" ? "rus" : "eng")

  toggleCity = () =>
    this.context.setCity(
      this.context.currentCity === "spb" ? "gen" : "spb")

  toggleMenu = () =>
    this.context.setMenu(!this.context.menuOpened)

  canSwitchCity = () =>
    !this.context.menuOpened
    && (
      this.props.location.pathname === "/"
      ||
      this.props.location.pathname === "/youinteralia"
    )


  renderHeader = () =>
    <div className="Menu__header">
      <Link
        to="/"
        className="Menu__header__logo"
      >
        youinteralia
      </Link>
      <div
        className="Menu__header__burger"
        onClick={() => this.toggleMenu()}
      />
      <div
        className="Menu__header__switcher"
        onClick={() =>
          this.canSwitchCity() ?
            this.toggleCity()
            :
            this.toggleLang()
        }
      >
        <div className={`
          Menu__header__switcher__container
          ${!this.canSwitchCity() && "Menu__header__switcher__container--lang"}`
        }>
          <div className="Menu__header__switcher__container__lang">
            {this.context.locale}
          </div>
          <div className={`
            Menu__header__switcher__container__city
            ${
              this.context.currentCity === "spb" ?
                "Menu__header__switcher__container__city--spb"
                :
                "Menu__header__switcher__container__city--gen"
            }
          `}>
            {this.context.currentCity}
          </div>
        </div>
      </div>
    </div>

  renderContent = () =>
    <div className={`
      Menu__content
      ${this.context.menuOpened && "Menu__content--opened"}
    `}>
      <div className="Menu__content__container">
        <div className="Menu__content__container__links">
          <Link to="/about">
            <FormattedMessage id="Menu.about" />
          </Link>
          <Dropdown title={getMessage(this, "Menu.artists")}>
            {getArtists(this)
              .map(artist =>
                <Link
                  key={artist.id}
                  to={`/artist/${artist.id}`}
                  onClick={() => {
                    this.context.setCity(artist.city)
                    //TODO focus
                  }}
                  className={`
                    Menu__content__container__links__item
                    Menu__content__container__links__item--${artist.city}
                  `}
                >
                  {artist.name}
                </Link>
              )}
          </Dropdown>
          <Link to="/archive">
            <FormattedMessage id="Menu.archive" />
          </Link>
          <Link to="/participate">
            <FormattedMessage id="Menu.participate" />
          </Link>
        </div>
        <Footer />
      </div>
    </div>

  render = () =>
    <ScrollToTop scrollRef={this.scrollRef}>
      <div className="Menu" ref={this.scrollRef}>
        {this.renderContent()}
        {this.renderHeader()}
      </div>
    </ScrollToTop>
}


export default withRouter(Menu)
