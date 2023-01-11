import styled, { css } from 'styled-components'

const PageTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--element-spacing-vertical);
  h1 {
    color: var(--color-grey--dark);
  }
  ${props =>
    props.noMarginBottom &&
    css`
      margin-bottom: 0;
    `}
`

export default PageTitleContainer
