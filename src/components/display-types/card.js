import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const CardStyles = styled.article`
  width: 100%;
  > a {
    display: block;
    padding: 1rem 2rem;
    border-bottom: 0;
    color: var(--color-white);
    background-color: var(--color-secondary);
    text-decoration: none;
    &:hover,
    &:focus {
      background-color: var(--color-primary);
      h2 {
        text-shadow: var(--text-shadow-large-text);
      }
      h2,
      p {
        color: var(--color-white);
      }
      h2 {
        text-decoration: underline;
      }
    }
  }
  a > *:last-child {
    margin: auto 0 2rem;
  }
`

export default function Card({ cardTitle, cardPath, cardCreated }) {
  return (
    <CardStyles>
      <Link to={cardPath}>
        {cardTitle && <h2>{cardTitle}</h2>}
        {cardCreated && <p>{cardCreated}</p>}
      </Link>
    </CardStyles>
  )
}
