import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const FooterStyles = styled.footer`
  background-color: var(--color-primary);
  a {
    color: var(--color-white);
  }
`

const Footer = () => (
  <FooterStyles>
    <p style={{ margin: 0 }}>
      <Link to="/">Marky</Link>
    </p>
  </FooterStyles>
)

export default Footer
