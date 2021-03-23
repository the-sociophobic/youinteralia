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
        Img
        ${this.props.className}
        ${typeof this.state.portrait === "undefined" && "Img--hidden"}
      `}
    >
      <img
        ref={this.imgRef}
        alt=""
        src={this.props.src}
        className={`Img__img Img__img--${this.state.portrait ? "portrait" : "landscape"}`}
        onLoad={this.setOrientation}
      />
      {this.props.children}
    </div>
}


export default Img