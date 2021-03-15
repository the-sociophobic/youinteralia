import React from 'react'

import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import ResizeObserver from 'resize-observer-polyfill'

import Player from 'components/Player'
import Img from 'components/Img'
import {
  StoreContext,
  getArtist,
} from 'components/Store'
import Link from 'components/CustomLink'


class Item extends React.Component {
  state = { width: 0 }

  static contextType = StoreContext

  itemRef = React.createRef()      
  
  componentDidMount = () =>
    this.resizeObs = new ResizeObserver(
      () =>
        this.setState({
          width: this.itemRef?.current?.scrollWidth }))
      .observe(this.itemRef.current)

  render = () =>
    <div
      className={`Item ${this.props.opened && "Item--opened"}`}
      onClick={() => !this.props.opened && this.props?.setItem()}
      ref={this.itemRef}
    >
      {(() => {
        const { item } = this.props

        switch(item.type) {
          case 'img':
            return <Img src={item.link} />
          case 'pdf':
            return <Link
                external
                to={item.link}
                newTab
                disabled={!this.props.opened}
              >
                <Document file={item.link}>
                  <Page
                    pageNumber={1}
                    width={this.state.width || 100}
                  />
                </Document>
              </Link>
          case 'mp3':
            return <Player
                compact
                artist={getArtist(this, item.link)}
              />
        }
      })()}

      <div
        className="Item__close"
        onClick={() => this.props?.close?.()}
      />
      {this.props.prev &&
        <div
          className="Item__prev"
          onClick={() => this.props?.prev?.()}
        />}
      {this.props.next &&
        <div
          className="Item__next"
          onClick={() => this.props?.next?.()}
        />}
    </div>
} 


export default Item