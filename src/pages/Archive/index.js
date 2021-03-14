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
import Link from 'components/CustomLink'

import items from './items'


const blatnye = ["Martina Mächler", "Andrea Marioni"]

const tags = Array.from(
  new Set(
    [blatnye, ...items]
      .reduce((a, b) =>
        [...(a.tags || a), ...b.tags])))

const isRussian = string =>
  /[а-яА-ЯЁё]/.test(string)


class Archive extends React.Component {
  state = {
    selectedTags: [],
    searchPressed: false,
  }

  static contextType = StoreContext

  getTags = () =>
    tags.filter(tag =>
      this.context.locale === "rus" ?
        isRussian(tag) : !isRussian(tag))

  getSelectedTags = () =>
    this.state.selectedTags.filter(tag =>
      this.context.locale === "rus" ?
        isRussian(tag) : !isRussian(tag))

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
        ${this.getSelectedTags().length > 0 && "Archive__search--tags"}
        ${(this.getSelectedTags().length === 0 && !this.state.searchPressed) && "Archive__search--full"}
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
      {this.getTags().map(tag =>
        <div
          className={`
            Archive__tags__item
            ${this.getSelectedTags().includes(tag) && "Archive__tags__item--selected"}
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

  renderNothing = () =>
    <div className="Archive__content__nothing">
      {(() => {
        const artists = this.getSelectedTags()
          .filter(tag => tag.includes(" "))

        if (artists.length !== 1 || !artists.some(artist => blatnye.includes(artist)))
          return <FormattedMessage id="Archive.nothing" />

        return <>
          no result. find out about artist below<br />
          {artists[0] === "Martina Mächler" ?
            <Link to="https://www.martinamaechler.com">
              martinamaechler.com
            </Link>
            :
            <Link to="https://marioniandrea.art">
              marioniandrea.art
            </Link>
          }
        </>
      })()}
    </div>

  renderContent = () => {
    const filteredMappedItems = items
      .filter(item =>
        this.getSelectedTags().length === 0 ||
        this.getSelectedTags().every(tag => item.tags.includes(tag)))
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
          this.renderNothing()}
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
        ${(this.getSelectedTags().length > 0 && !this.state.searchPressed) && "Archive__right--visible"}
      `}>
        {this.renderContent()}
      </div>
    </div>
}


export default Archive
