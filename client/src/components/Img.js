import React from 'react'

import ResizeObserver from 'resize-observer-polyfill'


class Img extends React.Component {
  state = {
    portrait: undefined,
    containerRatio: 0,
  }

  imgRef = React.createRef()
  containerRef = React.createRef()

  componentDidMount = () =>
    this.resizeObs = new ResizeObserver(this.setOrientation.bind(this))
      .observe(this.containerRef.current)

  setOrientation = () =>
    this.setState({
      portrait: this.containerRef?.current?.offsetWidth / this.containerRef?.current?.offsetHeight >
        this.imgRef?.current?.width / this.imgRef?.current?.height
    })

  render = () =>
    <div
      ref={this.containerRef}
      className={`
        lev-img
        ${this.props.className}
        ${typeof this.state.portrait === "undefined" && "lev-img--hidden"}
      `}
    >
      <img
        ref={this.imgRef}
        alt=""
        src={this.props.src}
        className={`lev-img__img lev-img__img--${this.state.portrait ? "portrait" : "landscape"}`}
        onLoad={this.setOrientation}
      />
    </div>
}


export default Img