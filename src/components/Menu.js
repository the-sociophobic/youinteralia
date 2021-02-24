import React from 'react'

import Link from 'components/Link'
import ExternalLink from 'components/ExternalLink'
import Dropdown from 'components/Dropdown'
import {
  StoreContext,
  FormattedMessage,
  getMessage,
  getArtists,
} from 'components/Store'


class Menu extends React.Component {

  static contextType = StoreContext

  toggleLang = () =>
    this.context.setLocale(
      this.context.locale === "eng" ? "rus" : "eng")

  toggleCity = () =>
    this.props.toggleCity()

  renderHeader = () =>
    <div className="Menu__header">
      <div
        className="Menu__header__logo"
        onClick={this.props.toggleMenu}
      >
        youinteralia
      </div>
      <div
        className="Menu__header__burger"
        onClick={this.props.toggleMenu}
      />
      <div
        className="Menu__header__switcher"
        onClick={() =>
          this.props.menuOpened ?
            this.toggleLang()
            :
            this.toggleCity()}
      >
        <div className={`Menu__header__switcher__container ${
          this.props.menuOpened && "Menu__header__switcher__container--lang"
        }`}>
          <div className="Menu__header__switcher__container__lang">
            {this.context.locale}
          </div>
          <div className={`Menu__header__switcher__container__city ${
            this.props.currentCity === "spb" ?
              "Menu__header__switcher__container__city--spb"
              :
              "Menu__header__switcher__container__city--gen"
          }`}>
            {this.props.currentCity}
          </div>
        </div>
      </div>
    </div>

  renderContent = () =>
    <div className={`Menu__content ${
      this.props.menuOpened && "Menu__content--opened"
    }`}>
      <div className="Menu__content__container">
        <div className="Menu__content__container__links">
          <Link to="about">
            <FormattedMessage id="Menu.about" />
          </Link>
          <Dropdown title={getMessage(this, "Menu.artists")}>
            {getArtists(this, this.props.currentCity)
              .map(artist =>
                <Link
                  key={artist.id}
                  to={`artist:${artist.id}`}
                  className={`Menu__content__container__links__item Menu__content__container__links__item--${this.props.currentCity}`}
                >
                  {artist.name}
                </Link>
              )}
          </Dropdown>
          <Link to="archive">
            <FormattedMessage id="Menu.archive" />
          </Link>
          <Link to="participate">
            <FormattedMessage id="Menu.participate" />
          </Link>
        </div>
        <div className="Menu__content__container__footer">
          <ExternalLink to="https://prohelvetia.ru/en/" newTab >
            <div className="Menu__content__container__footer__logo" />
          </ExternalLink>
        </div>
      </div>
    </div>

  render = () =>
    <div className="Menu">
      {this.renderContent()}
      {this.renderHeader()}
    </div>
}


export default Menu
