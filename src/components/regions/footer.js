import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const FooterStyles = styled.footer`
  position: sticky;
  bottom: 0;
  margin-top: auto;
  padding: 2rem 0;
  background-color: var(--color-primary);
  a {
    color: var(--color-white);
    border-bottom-color: transparent;
    &:hover {
      color: var(--color-white);
      border-bottom-color: var(--color-white);
    }
    &:focus {
      color: var(--color-white);
      outline-color: var(--color-white);
    }
  }
  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0;
  }
  li {
    list-style-type: none;
    margin: 1rem;
  }
`

const Footer = () => (
  <FooterStyles>
    <div className="layout-contained padding-horizontal">
      <ul style={{ margin: 0 }}>
        <li>
          <Link to="https://twitter.com/markconroy">Twitter</Link>
        </li>
        <li>
          <Link to="https://github.com/markconroy">Github</Link>
        </li>
        <li>
          <Link to="https://www.drupal.org/u/markconroy">Drupal</Link>
        </li>
        <li>
          <Link to="https://www.linkedin.com/in/conroymark">LinkedIn</Link>
        </li>
      </ul>
    </div>
  </FooterStyles>
)

export default Footer
