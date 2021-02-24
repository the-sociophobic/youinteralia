import React from 'react'

import ResizeObserver from 'resize-observer-polyfill'


export default class Dropdown extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      opened: props.initialOpen || false,
      contentHeight: 0,
    }

    this.contentRef = React.createRef()
  }

  componentDidMount() {
    this.resizeObs = new ResizeObserver(this.updateContentHeight.bind(this))
      .observe(this.contentRef.current)
  }

  updateContentHeight = () =>
    this.setState({ contentHeight: this.contentRef.current && this.contentRef.current.clientHeight })

  toggleOpened = () =>
    (this.props.toggleOpened || (() => this.setState({ opened: !this.state.opened })))()

  render = () =>
    <div className={`
      dropdown
      ${(this.props.opened || this.state.opened) && "dropdown--opened"}
      ${this.props.block && "dropdown--block"}
    `}>
      <div
        className={`dropdown__title ${this.props.city && "dropdown__title--city"}`}
        onClick={() => this.toggleOpened()}
      >
        {this.props.title}
        {this.props.city &&
          <div className={`dropdown__title__city dropdown__title__city--${this.props.city}`}>
            {this.props.city}
          </div>}
      </div>
      <div
        className="dropdown__content"
        style={{
          height: (this.props.opened || this.state.opened) ?
            (typeof this.props.maxHeight !== "undefined" ?
              this.props.maxHeight
              :
              this.state.contentHeight)
            : 0
        }}
      >
        <div
          className="dropdown__content__container"
          ref={this.contentRef}
        >
          {this.props.children}
        </div>
      </div>
    </div>
}