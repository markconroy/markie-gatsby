import React from 'react'
import { Link } from 'gatsby'

export default function MenuItems() {
  return (
    <ul>
      <li>
        <Link
          className="menu-link"
          activeClassName="menu-link--active"
          to="/blog"
          partiallyActive
        >
          Blog
        </Link>
      </li>
      <li>
        <Link
          className="menu-link"
          activeClassName="menu-link--active"
          to="/speaking"
          partiallyActive
        >
          Speaking
        </Link>
      </li>
      <li>
        <Link
          className="menu-link"
          activeClassName="menu-link--active"
          to="/about"
          partiallyActive
        >
          About
        </Link>
      </li>
      <li>
        <Link
          className="menu-link"
          activeClassName="menu-link--active"
          to="/contact"
          partiallyActive
        >
          Contact
        </Link>
      </li>
      <li>
        <a className="menu-link" href="https://fun.mark.ie" partiallyActive>
          Fun
        </a>
      </li>
    </ul>
  )
}
