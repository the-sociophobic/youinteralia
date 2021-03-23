import React from 'react'

import ExternalLink from 'components/ExternalLink'
import { FormattedMessage } from './Store'



const Footer = () =>
  <div className="Footer">
    <ExternalLink to="https://prohelvetia.ru/en/" newTab >
      <div className="Footer__logo" />
    </ExternalLink>
    <div className='Footer__names'>
      <FormattedMessage id='names' />
    </div>
  </div>


export default Footer