import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import SEO from '../components/seo'
import GlobalStyles from '../styles/GlobalStyles'
import MenuStyles from '../components/menu'
import MenuItems from '../components/menu-items'

const MainStyles = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-wrap: wrap;
  text-align: center;
  text-wrap: balance;
  line-height: 2;
  > * {
    width: 100%;
  }
  h1 {
    line-height: 1.3;
  }
  p {
    font-size: 150%;
  }
  @media screen and (min-width: 768px) {
    h1 {
      font-size: 4rem;
    }
    p {
      font-size: 2rem;
    }
    li {
      font-size: 1.5rem;
    }
  }
`

function HomePage() {
  return (
    <>
      <GlobalStyles />
      <SEO />
      <div className="layout-contained layout-contained--small padding-horizontal">
        <MainStyles>
          <div>
            <h1>Hi! I'm Mark Conroy.</h1>
            <hr />

            <p>
              Work status: <a href="/contact">engaged</a>.
            </p>
            <p>
              Next availability: <a href="/contact">September 2024</a>.
            </p>

            <hr />
            <p>
              I'm a consultant, interested in design systems, web components,
              and Drupal, especially LocalGov Drupal.
            </p>
            <hr />
            <p>
              I keep <a href="/blog">a blog</a>.
            </p>
            <p>
              I like to <a href="https://fun.mark.ie">build things for fun</a>.
            </p>
            <p>
              And I have a{' '}
              <a href="https://markie.eo.page/xrpd5">mailing list</a>.
            </p>
            <hr />
            <MenuStyles treated>
              <MenuItems />
            </MenuStyles>
          </div>
        </MainStyles>
      </div>
    </>
  )
}

export default HomePage
