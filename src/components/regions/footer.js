import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const FooterStyles = styled.footer`
  margin-top: auto;
  padding: 2rem 0;
  background-color: var(--color-primary);
  a {
    color: var(--color-white);
  }
`

const Footer = () => (
  <FooterStyles>
    <div className="layout-contained padding-horizontal">
      <p style={{ margin: 0 }}>
        <Link to="/">This is a footer. Cool, eh?</Link>
      </p>
    </div>
  </FooterStyles>
)

export default Footer
