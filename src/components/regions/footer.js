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
          <a href="https://twitter.com/markconroy">Twitter</a>
        </li>
        <li>
          <a href="https://github.com/markconroy">Github</a>
        </li>
        <li>
          <a href="https://www.drupal.org/u/markconroy">Drupal</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/conroymark">LinkedIn</a>
        </li>
      </ul>
    </div>
  </FooterStyles>
)

export default Footer
