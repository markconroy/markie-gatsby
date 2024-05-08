import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const CardStyles = styled.article`
  width: 100%;
  max-width: 700px;
  > a {
    display: block;
    padding: 1rem 2rem;
    color: var(--color-white);
    text-decoration: none;
    background-color: var(--color-primary--dark);
    > h2 {
      color: var(--color-white);
    }
    &:hover,
    &:focus {
      color: var(--color-white);
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
