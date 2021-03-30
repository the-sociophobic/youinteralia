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
import { registerListeners, unregisterListeners } from 'utils/preventMobileScrolling'


class Menu extends React.Component {

  state = {
    dropdownOpened: false
  }

  static contextType = StoreContext

  scrollRef = React.createRef()
  menuRef = React.createRef()

  componentDidMount = () => {
    registerListeners(this.menuRef.current)
    
    this.props.history.listen((location, action) =>
      action == "PUSH" && this.context.setMenu(false))
  }

  componentWillUnmount = () =>
    unregisterListeners(this.menuRef.current)
  
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

  renderArtists = className =>
    getArtists(this)
      .map(artist =>
        <Link
          key={artist.id}
          to={`/artist/${artist.id}`}
          onClick={() => {
            this.context.setCity(artist.city)
            //TODO focus
          }}
          className={`
            ${className}
            Menu__content__container__links__item
            Menu__content__container__links__item--${artist.city}
          `}
        >
          {artist.name}
        </Link>
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
    <div
      ref={this.scrollRef}
      className={`
        Menu__content
        ${this.context.menuOpened && "Menu__content--opened"}
      `}
    >
      <div className="Menu__content__container">
        <div
          className="Menu__content__container__links"
          style={this.context.oldBrowser && this.state.dropdownOpened ? { height: '600px' } : {}}
        >
          <Link to="/about">
            <FormattedMessage id="Menu.about" />
          </Link>
          <Dropdown
            title={getMessage(this, "Menu.artists")}
            maxHeight={400}
            setDropdownOpened={value => this.setState({ dropdownOpened: value })}
          >
            {this.renderArtists()}
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
    <div
      className={`Menu ${this.context.hideMenu && "Menu--hide"}`}
      ref={this.menuRef}
    >
      <ScrollToTop scrollRef={this.scrollRef}>
        {this.renderContent()}
      </ScrollToTop>
      {this.renderHeader()}
    </div>
}


export default withRouter(Menu)
