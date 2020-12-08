import React from 'react'
import styled from 'styled-components'

const CardListContainerStyles = styled.ul`
  display: flex;
  overflow-x: scroll;
  list-style: none;
  margin: 0;
  padding: 0;
`

const CardListItemStyles = styled.li`
  display: flex;
  width: 300px;
  flex-shrink: 0;
  margin-bottom: 2rem;
  + li {
    margin-left: 1rem;
  }
`

function CardListContainer({ children }) {
  return <CardListContainerStyles>{children}</CardListContainerStyles>
}

function CardListItem({ children, cardListItemKey }) {
  return (
    <CardListItemStyles key={cardListItemKey}>{children}</CardListItemStyles>
  )
}

export { CardListContainer, CardListItem }
