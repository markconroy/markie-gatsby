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
    --color-grey--dark: hsl(0,0%,25%);
    --color-black: hsl(0,0%,0%);
    --border-radius: 5px;
  }
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  
  body {
    margin: 0;
  }

  img {
    max-width: 100%;
  }

  pre {
    overflow: scroll;
    padding: 1rem;
    margin: 5rem calc(10% + 1rem) 5rem 0;
    border: 1px solid var(--color-secondary);
    border-radius: var(--border-radius);
    box-shadow: 2px 2px 0px 0px var(--color-secondary), 4px 4px 0px 0px var(--color-white), 1rem 1rem 0rem 0rem var(--color-secondary);
  }

  pre > code {
    line-height: 1.5;
    font-size: 1.25rem;
    border-radius: var(--border-radius);
  }

`

export default GlobalStyles
