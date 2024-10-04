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
    position: relative;
    color: var(--color-white);
    padding: 0.5rem 1rem;
    text-decoration: none;
    border-top: 0;
    border-bottom: 0;
    white-space: nowrap;
  }
  .menu-link::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--color-white);
    transition: var(--transition-time);
  }
  .menu-link:hover::after {
    bottom: 100%;
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
        padding-left: 0;
        padding-right: 0;
        color: var(--color-primary);
      }
      .menu-link::after {
        background-color: var(--color-primary--dark);
      }
      .menu-link:hover {
        border-top-color: var(--var-primary--dark);
      }
    `}
`

export default MenuStyles
