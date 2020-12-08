import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const CardStyles = styled.article`
  border: 2px solid var(--color-secondary);
  padding: 1rem;
  a {
    color: var(--color-primary);
    text-decoration: none;
  }
`

export default function Card({
  cardTitle,
  cardPath,
  cardImage,
  cardImageAlt,
  cardCreated,
}) {
  return (
    <CardStyles>
      <Link to={cardPath}>
        {cardImage && <Img fluid={cardImage} alt={cardImageAlt} />}
        <h2>{cardTitle}</h2>
      </Link>
      <p>{cardCreated}</p>
    </CardStyles>
  )
}
