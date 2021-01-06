import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Container from '../../styles/Container'

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
    <Container>
      <p style={{ margin: 0 }}>
        <Link to="/">This is a footer. Cool, eh?</Link>
      </p>
    </Container>
  </FooterStyles>
)

export default Footer