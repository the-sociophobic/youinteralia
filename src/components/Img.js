import React from 'react'


class Img extends React.Component {
  state = {
    portrait: undefined
  }

  imgRef = React.createRef()
  containerRef = React.createRef()

  setOrientation = () =>
    this.setState({
      portrait: this.containerRef.current.offsetWidth / this.containerRef.current.offsetHeight >
        this.imgRef.current.width / this.imgRef.current.height
    })

  render = () =>
    <div
      ref={this.containerRef}
      className={`lev-img ${this.props.className}`}>
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