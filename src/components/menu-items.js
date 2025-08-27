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
          to="/contact"
          partiallyActive
        >
          Contact
        </Link>
      </li>
      <li>
        <Link
          className="menu-link"
          activeClassName="menu-link--active"
          to="/available-drupal-developers"
          partiallyActive
        >
          Available Drupal Developers
        </Link>
      </li>
    </ul>
  )
}
