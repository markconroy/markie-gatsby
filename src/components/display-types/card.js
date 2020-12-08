import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const CardStyles = styled.article`
  border: 2px solid var(--color-secondary);

  a {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0 2rem;
    color: var(--color-grey--dark);
    text-decoration: none;
  }
  a > p {
    margin-bottom: 2rem;
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
