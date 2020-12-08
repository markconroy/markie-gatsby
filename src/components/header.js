import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Container from '../styles/Container'
import Menu from './menu'

const HeaderStyles = styled.header`
  margin-bottom: 4rem;
  background-color: var(--color-primary);
`

const Logo = styled.p`
  margin: 0;
  background-color: var(--color-white);
  display: flex;
  @media screen and (min-width: 768px) {
    margin-bottom: 3rem;
    font-size: 2rem;
  }
  a {
    margin: auto;
    padding: 0.5rem 1rem;
    color: var(--color-secondary);
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    &:hover,
    &:focus {
      text-decoration: underline;
    }
    @media screen and (min-width: 768px) {
      padding: 1rem 2rem;
    }
  }
`

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
`

const Header = ({ siteTitle }) => (
  <HeaderStyles>
    <Container>
      <HeaderInner>
        <Logo>
          <Link to="/">{siteTitle}</Link>
        </Logo>
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
