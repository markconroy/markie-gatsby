import styled, { css } from 'styled-components'

const PageTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: var(--element-spacing-vertical);
  border-bottom: 1px solid var(--color-secondary);
  background-color: var(--color-secondary);
  h1 {
    color: var(--color-white);
    position: sticky;
    top: 0;
    text-shadow: var(--text-shadow-large-text);
  }
  ${props =>
    props.noMarginBottom &&
    css`
      margin-bottom: 0;
    `}
`

export default PageTitleContainer
