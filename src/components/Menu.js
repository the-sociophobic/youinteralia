import React from 'react'


class Menu extends React.Component {
  state = {
    opened: false,
    lang: "eng",
  }

  toggleLang = () =>
    this.setState({
      lang: this.state.lang === "eng" ? "rus" : "eng"
    })

  renderHeader = () =>
    <div className="Menu__header">
      <div
        className="Menu__header__logo"
        onClick={() => this.setState({
          opened: !this.state.opened
        })}
      >
        youineralia
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
            this.props.toggleCity()}
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
      
    </div>

  render = () =>
    <div className="Menu">
      {this.renderContent()}
      {this.renderHeader()}
    </div>
}


export default Menu
