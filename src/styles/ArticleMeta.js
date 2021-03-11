import styled from 'styled-components'

const ArticleMeta = styled.div`
  display: inline-block;
  width: 100%;
  /* margin-top: var(--element-spacing-vertical); */
  padding: 0 1rem;
  border-bottom: 1px solid var(--color-secondary);
  color: var(--color-white);
  background-image: linear-gradient(
    to right,
    var(--color-secondary),
    transparent
  );
  text-shadow: var(--text-shadow);
`

export default ArticleMeta
