import styled, { css } from 'styled-components'

const PageTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--element-spacing-vertical);
  h1 {
    position: relative;
    display: flex;
    align-items: center;
    padding: var(--base-spacing);
    width: calc(100% - 2rem);
    min-height: 300px;
    border: 4px solid var(--color-white);
    color: var(--color-white);
    background-color: var(--color-primary--dark);
  }
  h1::before {
    position: absolute;
    z-index: -1;
    align-self: start;
    content: '';
    width: calc(100% - 2rem);
    height: calc(100% - 2rem);
    left: 3rem;
    bottom: -1rem;
    background-color: var(--color-primary--dark);
    transform: rotate(-3deg);
  }
  ${props =>
    props.noMarginBottom &&
    css`
      margin-bottom: 0;
    `}
`

export default PageTitleContainer
