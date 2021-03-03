import React from 'react'

import { Link } from 'react-router-dom'


const CustomLink = props =>
  props.disabled ? 
    <span
      className={`Link ${props.className}`}
      onClick={() => props.onClick()}
    >
      {props.children}
    </span>
    :
    <Link
      {...props}
      className={`Link ${props.className}`}
    />

    
export default CustomLink