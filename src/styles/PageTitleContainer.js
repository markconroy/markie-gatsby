import styled from 'styled-components'

const PageTitleContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: var(--element-spacing-vertical);
  border-bottom: 1px solid var(--color-secondary);
  background-image: linear-gradient(
    to right,
    var(--color-secondary),
    transparent
  );
  text-shadow: var(--text-shadow);
  h1 {
    color: var(--color-white);
    position: sticky;
    top: 0;
  }
`

export default PageTitleContainer
