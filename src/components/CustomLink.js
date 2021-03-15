import React from 'react'

import {
  Link,
  NavLink
} from 'react-router-dom'


const _Link = ({
  className,
  activeClassName,
  to,
  sameTab,
  children,
  onClick,
  disabled,
  external
}) =>
  disabled ?
    <span
      className={`Link Link--disabled ${className}`}
      onClick={() => onClick?.()}
    >
      {children}
    </span>
    :
    to.includes('http') || external ?
      <a
        className={`Link ${className}`}
        href={to}
        target={sameTab ? "" : "_blank"}
        rel="noopener noreferrer"
        onClick={() => onClick?.()}
      >
        {children}
      </a>
      :
      activeClassName ?
        <NavLink
          exact
          to={to}
          className={`Link ${className}`}
          activeClassName={`Link--active ${activeClassName}`}
          onClick={() => onClick?.()}
        >
          {children}
        </NavLink>
        :
        <Link
          to={to}
          className={`Link ${className}`}
          onClick={() => onClick?.()}
        >
          {children}
        </Link>


export default _Link