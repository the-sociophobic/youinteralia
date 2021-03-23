import React from 'react'

import ExternalLink from 'components/ExternalLink'
import { FormattedMessage } from './Store'
import Link from 'components/CustomLink'



const Footer = () =>
  <div className="Footer">
    <ExternalLink to="https://prohelvetia.ru/en/" newTab >
      <div className="Footer__logo" />
    </ExternalLink>
    <Link to='/rules' className='Footer__policy'>
      <FormattedMessage id='policy' />
    </Link>
    <div className='Footer__names'>
      <FormattedMessage id='names' />
    </div>
  </div>


export default Footer