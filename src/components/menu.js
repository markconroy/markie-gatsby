import styled, { css } from 'styled-components'

const MenuStyles = styled.nav`
  overflow: scroll;
  max-width: calc(100% - 1rem);
  margin-left: 1rem;
  padding: 0.5rem;
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
    color: var(--color-white);
    padding: 0.5rem 1rem;
    text-decoration: none;
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
  }
  .menu-link:focus,
  .menu-link:hover {
    border-top-color: transparent;
    border-bottom-color: var(--color-white);
  }
  .menu-link--active {
    border-top-color: var(--color-white);
  }
  ${props =>
    props.treated &&
    css`
      margin: 0;
      overflow: initial;
      ul {
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 0;
      }
      li {
        margin-bottom: 2rem;
        margin-left: 1rem;
        margin-right: 1rem;
      }
      li + li {
        margin-left: 0.5rem;
      }
      .menu-link {
        border-bottom-color: var(--color-grey--dark);
        padding-left: 0;
        padding-right: 0;
        color: var(--color-grey--dark);
      }
      .menu-link:focus {
        border-bottom-color: transparent;
      }
      .menu-link:hover {
        border-bottom-color: transparent;
        border-top-color: var(--var-grey--dark);
      }
    `}
`

export default MenuStyles
