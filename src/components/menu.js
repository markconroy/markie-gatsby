import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const MenuStyles = styled.nav`
  overflow: scroll;
  margin: 0;
  margin-left: 1rem;
  padding: 0.5rem;
  border-radius: var(--border-radius);
  background-color: var(--color-white);
  -ms-overflow-style: none; /* IE 11 */
  scrollbar-width: none; /* Firefox 64 */
  &::-webkit-slider-thumb {
    --webkit-appearance: none;
  }
  ul {
    display: flex;
    list-style: none;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  li + li {
    margin-left: 1rem;
  }
  .menu-link {
    color: var(--color-secondary);
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius);
  }
  .menu-link:focus,
  .menu-link:hover {
    color: var(--color-primary);
    text-decoration: none;
  }
  .menu-link--active {
    background-color: var(--color-primary);
    color: var(--color-white);
  }
  .menu-link--active:focus,
  .menu-link--active:hover {
    background-color: var(--color-secondary);
    color: var(--color-white);
  }
`

export default function Menu() {
  return (
    <>
      <MenuStyles>
        <ul>
          <li>
            <Link
              className="menu-link"
              activeClassName="menu-link--active"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="menu-link"
              activeClassName="menu-link--active"
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className="menu-link"
              activeClassName="menu-link--active"
              to="/speaking"
            >
              Speaking
            </Link>
          </li>
          <li>
            <Link
              className="menu-link"
              activeClassName="menu-link--active"
              to="/tags"
            >
              Tags
            </Link>
          </li>
          <li>
            <Link
              className="menu-link"
              activeClassName="menu-link--active"
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="menu-link"
              activeClassName="menu-link--active"
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </MenuStyles>
    </>
  )
}
