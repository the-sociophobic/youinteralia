import React from 'react'

import Lottie from 'react-lottie'
import ResizeObserver from 'resize-observer-polyfill'


class LottieControl extends React.Component {
 
  state = {
    isStopped: false,
    isPaused: false,
    width: 0,
    height: 0,
  }

  containerRef = React.createRef()
 
  componentDidMount = () =>
    this.resizeObs = new ResizeObserver(this.updateSize.bind(this))
      .observe(this.containerRef.current)

  updateSize = () =>
    this.setState({
      width: this.containerRef?.current?.clientWidth,
      height: this.containerRef?.current?.clientHeight,
    })

  render = () =>
    <div
      ref={this.containerRef}
      className="Animation"
    >
      <Lottie
        options={{
          loop: true,
          autoplay: true, 
          animationData: this.props.src.default,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
        }}
        width={this.state.width}
        height={this.state.height}
        isStopped={this.state.isStopped}
        isPaused={this.state.isPaused}
      />
    </div>
}


export default LottieControl