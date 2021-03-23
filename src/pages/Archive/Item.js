import React from 'react'

import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import ResizeObserver from 'resize-observer-polyfill'

import Img from 'components/Img'
import { StoreContext } from 'components/Store'
import Link from 'components/CustomLink'
import Youtube from 'components/Youtube'
import Vimeo from 'components/Vimeo'


class Item extends React.Component {
  state = { width: 0 }

  static contextType = StoreContext

  itemRef = React.createRef()      
  
  componentDidMount = () =>
    this.resizeObs = new ResizeObserver(
      () =>
        this.setState({
          width: this.itemRef?.current?.children[0]?.offsetWidth || this.itemRef?.current?.offsetWidth
        }))
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
                <Document file={item.link} >
                  <Page
                    pageNumber={1}
                    width={this.state.width || 100}
                  />
                </Document>
              </Link>
          case 'youtube':
            return <Youtube
                thumbnail={!this.props.opened}
                src={item.link}
              />
          case 'vimeo':
            return <Vimeo
                thumbnail={!this.props.opened && item.thumbnail}
                src={item.link}
              />
          case 'bandcamp':
            return item.link
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