import React from 'react'

import _ from 'lodash'
import { Document } from 'react-pdf'

import pdfImg from 'styles/img/pdf.png'
import { FormattedMessage } from 'components/Store'
import Player from 'components/Player'
import {
  StoreContext,
  getArtist,
} from 'components/Store'

import tags from './tags'
import items from './items'


class Archive extends React.Component {
  state = {
    selectedTags: [],
    searchPressed: false,
  }

  static contextType = StoreContext

  renderAbout = () =>
    <div className="Archive__about">
      <div className="Archive__about__title">
        <FormattedMessage id="Archive.title" />
      </div>
      <div className="Archive__about__desc">
        <FormattedMessage id="Archive.desc" />
      </div>
    </div>

  renderSearch = () =>
    <div
      onClick={() => this.setState({ searchPressed: !this.state.searchPressed })}
      className={`
        Archive__search
        ${this.state.selectedTags.length > 0 && "Archive__search--tags"}
        ${(this.state.selectedTags.length === 0 && !this.state.searchPressed) && "Archive__search--full"}
      `}
    >
      <div className="Archive__search__magnifier" />

      <div
        className="Archive__search__browse"
      >
        <FormattedMessage id="Archive.browse" />
      </div>
    </div>

  renderTags = () =>
    <div className="Archive__tags">
      {tags.map(tag =>
        <div
          className={`
            Archive__tags__item
            ${this.state.selectedTags.includes(tag) && "Archive__tags__item--selected"}
          `}
          onClick={() => this.toggleTag(tag)}
        >
          {tag}
        </div>
      )}
    </div>

  toggleTag = tag => {
    const { selectedTags } = this.state
    const tagIndex = selectedTags.indexOf(tag)


    this.setState({
      selectedTags: tagIndex === -1 ?
        [...selectedTags, tag]
        :
        selectedTags.filter(elem => elem !== tag)
    })
  }

  renderContent = () => {
    const filteredMappedItems = items
      .slice(0, 25)
      .filter(item =>
        this.state.selectedTags.length === 0 ||
        _.intersection(item.tags, this.state.selectedTags).length > 0)
      .map(item =>
        <div className="Archive__content__item">
          {this.renderItem(item)}
        </div>
      )
    const third = Math.round(filteredMappedItems.length / 3)
    const half = Math.round(filteredMappedItems.length / 2)

    return (
      <div className="Archive__content">
        {filteredMappedItems.length === 0 &&
          <div className="Archive__content__nothing">
            <FormattedMessage id="Archive.nothing" />
          </div>
        }
        <div className="Archive__content__col desktop-only">
          {filteredMappedItems.slice(third * 2)}
        </div>
        <div className="Archive__content__col desktop-only">
          {filteredMappedItems.slice(third, third * 2)}
        </div>
        <div className="Archive__content__col desktop-only">
          {filteredMappedItems.slice(0, third)}
        </div>

        <div className="Archive__content__col mobile-only">
          {filteredMappedItems.slice(0, half)}
        </div>
        <div className="Archive__content__col mobile-only">
          {filteredMappedItems.slice(half)}
        </div>
      </div>
    )
  }

  renderItem = item => {
    switch(item.type) {
      case "img":
        return <img src={item.link} alt="" />
      case "pdf":
        return <img src={pdfImg} alt="" />
        // return <Document file={item.link} />
      default:
        return ""
    }
  }

  renderOpenedContent = () =>
    <div className="Archive__">

    </div>


  render = () =>
    <div className="Archive">
      <div className="Archive__left">
        {this.renderAbout()}
        {this.state.searchPressed && this.renderTags()}
      </div>
        {this.renderSearch()}
      <div className={`
        Archive__right
        ${(this.state.selectedTags.length > 0 && !this.state.searchPressed) && "Archive__right--visible"}
      `}>
        {this.renderContent()}
      </div>
    </div>
}


export default Archive
