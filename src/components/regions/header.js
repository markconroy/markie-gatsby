import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import MenuStyles from '../menu'
import MenuItems from '../menu-items'

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

const HeaderInnerStyles = styled.div`
  display: flex;
  justify-content: space-between;
`

const Header = ({ siteTitle }) => (
  <HeaderStyles>
    <div className="layout-contained padding-horizontal">
      <HeaderInnerStyles>
        <Logo>
          <Link to="/">{siteTitle}</Link>
        </Logo>
        <MenuStyles>
          <MenuItems />
        </MenuStyles>
      </HeaderInnerStyles>
    </div>
  </HeaderStyles>
)

export default Header
