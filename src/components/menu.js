import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const MenuStyles = styled.nav`
  overflow: scroll;
  margin-left: 1rem;
  -ms-overflow-style: none; /* IE 11 */
  scrollbar-width: none; /* Firefox 64 */
  background-color: var(--color-white);
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
  a {
    color: var(--color-secondary);
  }
  a:focus,
  a:hover {
    color: var(--color-primary);
    text-decoration: none;
  }
`

export default function Menu() {
  return (
    <>
      <MenuStyles>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/speaking">Speaking</Link>
          </li>
          <li>
            <Link to="/tags">Tags</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </MenuStyles>
    </>
  )
}
