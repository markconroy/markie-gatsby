import React, { useEffect } from 'react'
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
  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      'https://eocampaign1.com/form/d8730bd4-c81c-11ed-9794-af315f113760.js'
    script.async = true
    script.setAttribute('data-form', 'd8730bd4-c81c-11ed-9794-af315f113760')

    document.body.appendChild(script)

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])
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
              I'm a consultant, interested in design systems, web components,
              and Drupal, especially LocalGov Drupal.
            </p>

            <hr />

            <p>
              I also help recruiters and agencies to{' '}
              <a href="/available-drupal-developers/">
                find the right Drupal developer
              </a>{' '}
              for your project.
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
