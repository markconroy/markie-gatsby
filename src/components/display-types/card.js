import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const CardStyles = styled.article`
  a {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0 2rem;
    color: var(--color-white);
    background-color: var(--color-secondary);
    text-decoration: none;
    transition: 0.3s;
    &:hover,
    &:focus {
      background-color: var(--color-primary);
      h2 {
        text-decoration: underline;
        color: var(--color-white);
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
