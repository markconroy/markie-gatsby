import React from 'react'
import styled from 'styled-components'

const CardListContainerStyles = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow-x: scroll;
`

const CardListItemStyles = styled.li`
  --card-item-width: 80%;
  width: var(--card-item-width);
  display: flex;
  flex-shrink: 0;
  + li {
    margin-left: 1rem;
  }
  @media screen and (min-width: 550px) {
    --card-item-width: 45%;
  }
  @media screen and (min-width: 960px) {
    --card-item-width: 30%;
  }
`

function CardListContainer({ children }) {
  return <CardListContainerStyles>{children}</CardListContainerStyles>
}

function CardListItem({ children, cardListItemKey, cardListItemId }) {
  return (
    <CardListItemStyles key={cardListItemKey}>{children}</CardListItemStyles>
  )
}

export { CardListContainer, CardListItem }
