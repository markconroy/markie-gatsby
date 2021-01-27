import styled, { css } from 'styled-components'

const MenuStyles = styled.nav`
  overflow: scroll;
  max-width: calc(100% - 1rem);
  margin: 4rem 0 0 1rem;
  padding: 0.5rem;
  background-color: var(--color-white);
  -ms-overflow-style: none; /* IE 11 */
  scrollbar-width: none; /* Firefox 64 */
  &::-webkit-slider-thumb {
    --webkit-appearance: none;
  }
  ul {
    display: flex;
    list-style: none;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  li + li {
    margin-left: 1rem;
  }
  .menu-link {
    color: var(--color-grey--dark);
    padding: 0.5rem 1rem;
    text-decoration: none;
    border-radius: var(--border-radius);
  }
  .menu-link:focus,
  .menu-link:hover {
    color: var(--color-primary);
    text-decoration: underline;
  }
  .menu-link--active {
    background-color: var(--color-primary);
    color: var(--color-white);
    ${props =>
      props.isPartiallyCurrent &&
      css`
        background-color: var(--color-primary);
        color: var(--color-white);
      `}
  }
  .menu-link--active:focus,
  .menu-link--active:hover {
    background-color: var(--color-secondary);
    color: var(--color-white);
  }
  ${props =>
    props.treated &&
    css`
      margin: 0;
      overflow: initial;
      ul {
        flex-wrap: wrap;
        justify-content: center;
      }
      li {
        margin-bottom: 2rem;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
      }
      li + li {
        margin-left: 0.5rem;
      }
      .menu-link {
        color: var(--color-white);
        background-color: var(--color-secondary);
      }
    `}
`

export default MenuStyles
