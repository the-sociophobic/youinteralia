import React from 'react'


const ExternalLink = props =>
  <a
    className={`Link ${props.className}`}
    href={props.to}
    target={props.newTab ? "_blank" : ""}
    rel="noopener noreferrer"
    onClick={() => props.onClick && props.onClick()}
  >
    {props.children}
  </a>


export default ExternalLink