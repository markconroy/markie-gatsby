import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import MenuStyles from '../menu'
import MenuItems from '../menu-items'

const HeaderStyles = styled.header`
  position: sticky;
  top: 0;
  padding-top: 3rem;
  padding-bottom: 2rem;
  background-color: var(--color-grey--dark);
`

const Logo = styled.p`
  margin: 0;
  display: flex;
  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
  a {
    margin: auto;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-bottom-color: transparent;
    color: var(--color-white);
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    &:hover {
      color: var(--color-white);
      border-bottom-color: var(--color-white);
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
