import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const CardListStyles = styled.ul`
  display: flex;
  overflow-x: scroll;
  list-style: none;
  margin: 0;
  padding: 0;
  li + li {
    margin-left: 1rem;
  }
`

const CardStyles = styled.article`
  a {
    color: var(--color-primary);
    text-decoration: none;
  }
`

function SingleCard({ card }) {
  return (
    <CardStyles>
      <Link to={card.path.alias}>
        <h2>{card.title}</h2>
      </Link>
      <p>{card.created}</p>
    </CardStyles>
  )
}

export default function CardList({ cards }) {
  return (
    <>
      <CardListStyles>
        {cards.map(card => (
          <li>
            <SingleCard card={card} key={card.id} />
          </li>
        ))}
      </CardListStyles>
    </>
  )
}
