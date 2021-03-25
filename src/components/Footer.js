import React from 'react'

import ExternalLink from 'components/ExternalLink'
import { StoreContext, FormattedMessage } from './Store'
import Link from 'components/CustomLink'
import Img from 'components/Img'

import logo from 'styles/img/logo.svg'
import logoEng from 'styles/img/logo_eng.svg'



class Footer extends React.Component {
  
  static contextType = StoreContext

  render = () =>
    <div className="Footer">
      <ExternalLink to="https://prohelvetia.ru/en/" newTab >
        <Img
          portrait
          className={`Footer__logo ${this.context.locale === 'eng' && 'Footer__logo--eng'}`}
          src={this.context.locale === 'eng' ? logoEng : logo}
        />
      </ExternalLink>
      <Link to='/rules' className='Footer__policy'>
        <FormattedMessage id='policy' />
      </Link>
      <div className='Footer__names'>
        <FormattedMessage id='names' />
      </div>
    </div>
}


export default Footer