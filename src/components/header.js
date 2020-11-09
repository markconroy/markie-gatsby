import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Container from './container'
import Menu from './menu'

const HeaderStyles = styled.header`
  padding: 2rem 0;
  background-color: var(--color-secondary);
  a {
    color: var(--color-white);
  }
`

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Header = ({ siteTitle }) => (
  <HeaderStyles>
    <Container>
      <HeaderInner>
        <p style={{ margin: 0 }}>
          <Link to="/">{siteTitle}</Link>
        </p>
        <Menu />
      </HeaderInner>
    </Container>
  </HeaderStyles>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
