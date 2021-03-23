import React from 'react'

import ExternalLink from 'components/ExternalLink'
import { StoreContext, FormattedMessage } from './Store'
import Link from 'components/CustomLink'



class Footer extends React.Component {
  
  static contextType = StoreContext

  render = () =>
    <div className="Footer">
      <ExternalLink to="https://prohelvetia.ru/en/" newTab >
        <div className={`Footer__logo ${this.context.locale === 'eng' && 'Footer__logo--eng'}`} />
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