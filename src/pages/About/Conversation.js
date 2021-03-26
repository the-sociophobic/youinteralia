import React from 'react'

import paragraphs from './paragraphs'


class Conversation extends React.Component {

  state = {
    clickCount: 0
  }

  componentDidMount = () => {
    this.audio = new Audio()

    this.audio.addEventListener('ended', () => {
      this.pause()
      this.audio.currentTime = 0
      this.play()
    })

    this.audio.preload = 'auto'
    this.audio.src = 'https://storage.yandexcloud.net/cdn.tochkadostupa.spb.ru/the_sociophobic/youinteralia/%D0%97%D0%B4%D0%BE%D1%80%D0%BE%D0%B2%D0%BE%20%D0%B8%20%D0%92%D0%B5%D1%87%D0%BD%D0%BE.mp3'
    this.audio.load()
  }

  click = () => {
    console.log(5 - this.state.clickCount)

    this.state.clickCount !== 5 ?
      this.setState({
        clickCount: this.state.clickCount + 1
      })
      :
      this.audio.play()
  }

  renderParagraph = paragraph =>
    <div className='Conversation__paragraph'>
      <div className='Conversation__paragraph__title'>
        <div className='Conversation__paragraph__title__text'>
          {paragraph.title}
        </div>
        {paragraph.small &&
          <div className='Conversation__paragraph__title__small'>
            {paragraph.small}
          </div>}
        <div className='Conversation__paragraph__title__from'>
          from: {paragraph.from}
        </div>
        <div className='Conversation__paragraph__title__to'>
          to: {paragraph.to}
        </div>
        <div className='Conversation__paragraph__title__date'>
          {paragraph.date}
        </div>
      </div>
      <div className='Conversation__paragraph__text'>
        {paragraph.text(() => this.click())}
      </div>
    </div>

  render = () =>
    <div className='Conversation'>
      {paragraphs.map(paragraph =>
        this.renderParagraph(paragraph))}
    </div>
}


export default Conversation