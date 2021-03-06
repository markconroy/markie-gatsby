import styled from 'styled-components'

const PageTitleContainer = styled.div`
  min-height: calc(100vh - 165px); // screen minus height of header
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: var(--element-spacing-vertical);
  border-bottom: 1px solid var(--color-secondary);
  background-color: var(--color-secondary);
  text-shadow: var(--text-shadow);
  h1 {
    color: var(--color-white);
    position: sticky;
    top: 0;
  }
`

export default PageTitleContainer
