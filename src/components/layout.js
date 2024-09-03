/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Script } from 'gatsby'
import styled from 'styled-components'
import Header from './regions/header'
import GlobalStyles from '../styles/GlobalStyles'
import Footer from './regions/footer'

const LayoutContainerStyles = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  > *:nth-last-child(2) {
    padding-bottom: 4rem;
  }
`
function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      'https://eocampaign1.com/form/d8730bd4-c81c-11ed-9794-af315f113760.js'
    script.async = true
    script.setAttribute('data-form', 'd8730bd4-c81c-11ed-9794-af315f113760')

    document.body.appendChild(script)

    console.log('Script appended:', script)

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
        console.log('Script removed:', script)
      }
    }
  }, [])

  return (
    <>
      <GlobalStyles />
      <LayoutContainerStyles>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>{children}</main>
        <Footer />
      </LayoutContainerStyles>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
