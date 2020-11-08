import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const HeaderStyles = styled.header`
  padding: 2rem 0;
  background-color: var(--color-secondary);
  a {
    color: var(--color-white);
  }
`

const Header = ({ siteTitle }) => (
  <HeaderStyles>
    <p style={{ margin: 0 }}>
      <Link to="/">{siteTitle}</Link>
    </p>
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
    </ul>
  </HeaderStyles>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
