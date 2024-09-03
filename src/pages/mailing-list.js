import React, { useEffect } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '../styles/Container'
import PageTitleContainer from '../styles/PageTitleContainer'

function MailListPage() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      'https://eocampaign1.com/form/8156e878-ddf4-11ed-ab87-f168f6d5dd46.js'
    script.async = true
    script.setAttribute('data-form', '8156e878-ddf4-11ed-ab87-f168f6d5dd46')

    const formDiv = document.getElementById('eocampaign1-form')
    if (formDiv) {
      formDiv.appendChild(script)
    }

    return () => {
      if (formDiv && script.parentNode) {
        formDiv.removeChild(script)
      }
    }
  }, [])

  return (
    <Layout>
      <SEO title="Mailing List" />
      <Container>
        <PageTitleContainer>
          <h1>Mailing List</h1>
        </PageTitleContainer>
      </Container>
      <Container>
        <p style={{ marginBottom: '4rem' }}>
          I email about LGD developments, Drupal, and new products I am working
          on.
        </p>
        <div id="eocampaign1-form" />
      </Container>
    </Layout>
  )
}

export default MailListPage
