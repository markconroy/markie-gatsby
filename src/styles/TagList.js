import styled from 'styled-components'

const TagList = styled.ol`
  li + li {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--color-grey--light);
  }
  li:last-of-type {
    margin-bottom: var(--base-line-height);
  }
  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`

export default TagList
