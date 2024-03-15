import styled, { css } from 'styled-components'

const PageTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--element-spacing-vertical);
  h1 {
    color: var(--color-primary--dark);
    border: 4px solid var(--color-primary--dark);
    padding: var(--base-spacing);
    padding: var(--base-spacing);
  }
  ${props =>
    props.noMarginBottom &&
    css`
      margin-bottom: 0;
    `}
`

export default PageTitleContainer
