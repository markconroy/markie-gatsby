import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    /* Colours */
    --color-primary: hsl(220, 70%, 60%);
    --color-primary--light: hsl(200,100%,40%);
    --color-primary--dark: hsl(200,100%,20%);
    --color-secondary: hsl(23, 90%, 55%);
    --color-secondary--light: hsl(330,75%,55%);
    --color-secondary--dark: hsl(330,75%,35%);
    --color-white: hsl(0,0%,100%);
    --color-grey: hsl(0,0%,50%);
    --color-grey--light: hsl(0,0%,75%);
    --color-grey--lighter: hsl(0,0%,85%);
    --color-grey--lightest: hsl(0,0%,95%);
    --color-grey--dark: hsl(75,15%,15%);
    --color-black: hsl(0,0%,0%);
    --color-border: var(--color-primary);

    /* Vertical Rhythm */
    --base-font-size: 16px;
    --base-line-height: 2;
    --base-spacing: 1.5rem;

    /* Breakpoints */
    --bp-xsmall: 23.75rem; // 380px
    --bp-small: 31.25rem; // 500px
    --bp-medium: 40.625rem; // 613px
    --bp-large: 48rem; // 768px
    --bp-xlarge: 60rem; // 960px
    --bp-xxlarge: 66.625rem;  // 1066px
    --bp-xxxlarge: 78rem; // 1200px
    --bp-super: 90rem; // 1440px

    /* Extras */
    --transition-time: 0.3s;
    --border-radius: 5px;
    --box-shadow: 0 2px 4px 0 rgba(0,0,0,.5);
    --text-shadow: 2px 2px 0 var(--color-black);
    --text-shadow-large-text: var(--color-grey--dark) 9px 6px 3px, var(--color-grey--dark) -6px -6px 3px, var(--color-grey--dark) -12px 6px 3px;
    --element-spacing-vertical: clamp(3rem, 6vw, 6rem);
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    margin: 0;
    line-height: var(--base-line-height);
  }

  main {
    position: relative;
    z-index: 1;
    background-color: var(--color-white);
  }

  h1, .h1,
  h2, .h2,
  h3, .h3,
  h4, .h4,
  h5, .h5,
  h6, .h6 {
    color: var(--color-primary--dark);
  }

  h1, .h1 {
    margin-bottom: var(--element-spacing-vertical);
    margin-top: var(--element-spacing-vertical);
    font-size: 3rem;
    font-size: clamp(2rem, 8vw, 6rem);
    line-height: 1.1;
  }

  h2, .h2 {
    font-size: 2rem;
    font-size: clamp(1.75rem, 6vw, 3rem);
  }

  h3, .h3 {
    font-size: 1.75rem;
    font-size: clamp(1.3rem, 4vw, 2rem);
  }

  a {
    color: var(--color-primary);
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 4px;
    &:focus,
    &:hover {
      text-decoration: none;
      color: var(--color-grey--dark);
    }
    &:focus {
      outline: 2px dashed var(--color-primary);
      outline-offset: 2px;
    }
    &:hover {
      transition: var(--transition-time);
    }
  }

  p,
  li {
    max-width: var(--bp-large);
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
    line-height: var(--base-line-height);
    font-size: 1.25rem;
    border-radius: var(--border-radius);
  }

  code {
    padding: 0 .5rem;
    color: black;
    display: inline-block;
    outline: 1px solid var(--color-primary--dark);
  }

  blockquote {
    border-left: 5px solid var(--color-primary--dark);
    padding: 1rem var(--base-spacing);
    margin-left: 0;
    margin-block: var(--element-spacing-vertical);
    font-style: italic;
    font-size: 120%;
    background-color: var(--color-grey--lightest);
  }

  /* Utility Classes */

  /* Layout Classes */
  .layout-contained {
    max-width: var(--bp-xlarge);
    margin-right: auto;
    margin-left: auto;
  }

  .layout-contained--xxlarge {
    max-width: var(--bp-xxxlarge);
  }

  // Layout container for elements poping out from main container.
  .layout-contained--xlarge {
    max-width: var(--bp-xxlarge);
  }

  // Layout container for elements using the 8/12 part of grid.
  .layout-contained--medium {
    max-width: var(--bp-large);
  }

  .layout-contained--small {
    max-width: var(--bp-medium);
  }

  .layout-content {
    > * {
      margin-top: 3rem;
      max-width: var(--bp-medium);
      margin-top: var(--element-spacing-vertical);
    }
    [data-entity-type="media"],
    pre {
      max-width: 100%;
    }
  }

  .padding-horizontal {
    padding-right: var(--base-spacing);
    padding-left: var(--base-spacing);
  }

  .padding-vertical {
    padding-top: var(--base-spacing);
    padding-bottom: var(--base-spacing);
  }

  .padding-top {
    padding-top: var(--element-spacing-vertical);
  }

  .padding-bottom {
    padding-bottom: var(--element-spacing-vertical);
  }

  .margin-top {
    margin-top: var(--element-spacing-vertical);
  }

  .margin-bottom {
    margin-bottom: var(--element-spacing-vertical);
  }

  .visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  iframe {
    max-width: 100%;
  }

`

export default GlobalStyles
