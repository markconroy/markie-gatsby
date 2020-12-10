import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary: hsl(200,100%,30%);
    --color-primary--light: hsl(200,100%,40%);
    --color-primary--dark: hsl(200,100%,20%);
    --color-secondary: hsl(330,75%,45%);
    --color-secondary--light: hsl(330,75%,55%);
    --color-secondary--dark: hsl(330,75%,35%);
    --color-white: hsl(0,0%,100%);
    --color-grey: hsl(0,0%,50%);
    --color-grey--light: hsl(0,0%,75%);
    --color-grey--dark: hsl(75,15%,15%);
    --color-black: hsl(0,0%,0%);
    --color-border: var(--color-secondary);
    --border-radius: 5px;
  }
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  
  body {
    margin: 0;
  }

  h1 {
    margin-bottom: 3rem;
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  a {
    color: var(--color-secondary);
    &:focus,
    &:hover {
      text-decoration: none;
      color: var(--color-primary);
    }
    &:focus {
      outline: 2px dashed var(--color-secondary);
      outline-offset: 2px;
    }
    &:hover {
      transition: 0.3s;
    }
  }

  img {
    max-width: 100%;
  }

  pre {
    overflow: scroll;
    margin: 3rem 0;
    border-radius: var(--border-radius);
  }

  pre > code {
    line-height: 1.5;
    font-size: 1.25rem;
    border-radius: var(--border-radius);
  }

`

export default GlobalStyles
