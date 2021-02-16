import React from 'react'

import Link from 'components/Link'
import ExternalLink from 'components/ExternalLink'
import Dropdown from 'components/Dropdown'
import { StoreContext } from 'components/Store'


class Menu extends React.Component {
  state = {
    opened: false,
    lang: "eng",
  }

  static contextType = StoreContext

  toggleLang = () =>
    this.setState({
      lang: this.state.lang === "eng" ? "rus" : "eng"
    })

  toggleCity = () => {
    this.props.toggleCity()
  }

  renderHeader = () =>
    <div className="Menu__header">
      <div
        className="Menu__header__logo"
        onClick={() => this.setState({
          opened: !this.state.opened
        })}
      >
        youinteralia
      </div>
      <div
        className="Menu__header__burger"
        onClick={() => this.setState({
          opened: !this.state.opened
        })}
      />
      <div
        className="Menu__header__switcher"
        onClick={() =>
          this.state.opened ?
            this.toggleLang()
            :
            this.toggleCity()}
      >
        <div className={`Menu__header__switcher__container ${
          this.state.opened && "Menu__header__switcher__container--lang"
        }`}>
          <div className="Menu__header__switcher__container__lang">
            {this.state.lang}
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
      this.state.opened && "Menu__content--opened"
    }`}>
      <div className="Menu__content__container">
        <div className="Menu__content__container__links">
          <Link to="about">
            about the project
          </Link>
          <Dropdown title="artists and routes">
            {this.context.artists[this.props.currentCity].map(artist =>
              <Link
                to={artist.link}
                className={`Menu__content__container__links__item Menu__content__container__links__item--${this.props.currentCity}`}
              >
                {artist.name}
              </Link>
            )}
          </Dropdown>
          <Link to="archive">
            archive
          </Link>
          <Link to="participate">
            participate
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
