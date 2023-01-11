import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const CardStyles = styled.article`
  width: 100%;
  max-width: 700px;
  > a {
    display: block;
    padding: 1rem 2rem;
    border-bottom: 0;
    border-left: 5px solid var(--color-grey--dark);
    color: var(--color-grey--dark);
    text-decoration: none;
    &:hover,
    &:focus {
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
