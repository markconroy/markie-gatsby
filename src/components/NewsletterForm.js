import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

const FormContainer = styled.div`
  margin: var(--element-spacing-vertical) 0;
  padding: 2rem;
  background: var(--color-background-light, #f8f9fa);
  border-radius: 8px;
  border: 1px solid var(--color-border, #e9ecef);

  h3 {
    margin-bottom: 1rem;
    color: var(--color-primary--dark);
  }

  p {
    margin-bottom: 1.5rem;
    color: var(--color-text);
  }
`

export default function NewsletterForm({
  formId = '02e55ac2-7205-11f0-afe3-6f416b030533',
}) {
  const formContainerRef = useRef(null)

  useEffect(() => {
    if (!formContainerRef.current) return

    const script = document.createElement('script')
    script.src = `https://eocampaign1.com/form/${formId}.js`
    script.async = true
    script.setAttribute('data-form', formId)

    formContainerRef.current.appendChild(script)

    console.log('Newsletter form script loaded:', script)

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
        console.log('Newsletter form script removed:', script)
      }
    }
  }, [formId])

  return (
    <FormContainer>
      <h2>Course: Build a LocalGov Drupal Website</h2>
      <p>
        Subscribe to get updates about the course (and perhaps a discount code
        before it is launched).
      </p>
      <div ref={formContainerRef} />
    </FormContainer>
  )
}
