import React from 'react'

import paragraphs from './paragraphs'


class Conversation extends React.Component {

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
        {paragraph.text}
      </div>
    </div>

  render = () =>
    <div className='Conversation'>
      {paragraphs.map(paragraph =>
        this.renderParagraph(paragraph))}
    </div>
}


export default Conversation