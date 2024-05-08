import React from 'react'
import styled from 'styled-components'

const CardListContainerStyles = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const CardListItemStyles = styled.li`
  margin-bottom: var(--element-spacing-vertical);
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
