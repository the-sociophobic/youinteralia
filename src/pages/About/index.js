import React from 'react'

import { StoreContext, getMessage, FormattedMessage } from 'components/Store'
import Dropdown from 'components/Dropdown'
import Footer from 'components/Footer'

import Conversation from './Conversation'
import AboutUs from './AboutUs'
import About2 from './About2'
import Link from 'components/CustomLink'


class About extends React.Component {

  state = {
    currentSection: 'concept',
  }

  static contextType = StoreContext

  renderButton = id =>
    <div
      className={`
        About__left__buttons__item
        ${id === this.state.currentSection
          && 'About__left__buttons__item--current'}
      `}
      onClick={() => this.setState({ currentSection: id })}
    >
      <div className='About__left__buttons__item__text'>
        <FormattedMessage id={`About.${id}.${id === 'conversation' ? 'read' : 'name'}`} />
      </div>
    </div>

  renderConcept = () =>
    <div className='Concept'>
      <FormattedMessage id='About.concept.text' />
    </div>

  render = () =>
    <>
      <div className='About-mobile'>
        <div className='About-mobile__buttons'>
          <div className='About-mobile__buttons__container'>
            <Dropdown block title={getMessage(this, 'About.concept.name')}>
              {this.renderConcept()}
            </Dropdown>
            <Dropdown block title={getMessage(this, 'About.conversation.name')}>
              <Dropdown
                block
                title={getMessage(this, 'About.conversation.name')}
                right={
                  <Link
                    className='About-mobile__buttons__item--download'
                    to='https://storage.yandexcloud.net/cdn.tochkadostupa.spb.ru/the_sociophobic/youinteralia/conversation.pdf'
                  >
                    <div className='About-mobile__buttons__item__text'>
                      <FormattedMessage id='About.conversation.download' />
                    </div>
                  </Link>
                }
              >
                <Conversation />
              </Dropdown>
              {
                <Dropdown
                  className=''
                  block
                  title={getMessage(this, 'About.about2.name')}
                >
                  <About2 />
                </Dropdown>}
            </Dropdown>
            <Dropdown block title={getMessage(this, 'About.aboutUs.name')}>
              <AboutUs />
            </Dropdown>
          </div>
        </div>
        
        <Footer />
      </div>

      <div className='About desktop-only'>
        <div className='About__left'>
          <div className='About__left__buttons'>
            <div className='About__left__buttons__content'>
              {this.renderButton('concept')}
              <Dropdown
                block
                title={getMessage(this, 'About.conversation.name')}
              >
                <div className='row'>
                  <div className='col-6'>
                    <Link
                      className='About__left__buttons__item About__left__buttons__item--download'
                      to='https://storage.yandexcloud.net/cdn.tochkadostupa.spb.ru/the_sociophobic/youinteralia/conversation.pdf'
                    >
                      <div className='About__left__buttons__item__text'>
                        <FormattedMessage id='About.conversation.download' />
                      </div>
                    </Link>
                  </div>
                  <div className='col-6'>
                    {this.renderButton('conversation')}
                  </div>
                </div>
                <div className='row' style={{ borderTop: '1px solid #474747' }}>
                  <div className='col-12'>
                    {this.renderButton('about2')}
                  </div>
                </div>
              </Dropdown>
              {this.renderButton('aboutUs')}
            </div>
          </div>
          <Footer className='w-100' />
        </div>
        <div className={`
          About__right
          ${this.state.currentSection === 'concept' && 'About__right--concept'}
        `}>
          {{
            concept: this.renderConcept(),
            conversation: <Conversation />,
            aboutUs: <AboutUs />,
            about2: <About2 />
          }[this.state.currentSection]}
        </div>
      </div>
    </>
}


export default About