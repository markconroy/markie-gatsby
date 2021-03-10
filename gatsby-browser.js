/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

const addScript = url => {
  const script = document.createElement("script")
  script.src = url
  script.async = true
  document.body.appendChild(script)
}

export const onClientEntry = () => {
  window.onload = () => {
    addScript("https://cdn.jsdelivr.net/gh/nuxodin/ie11CustomProperties@4.1.0/ie11CustomProperties.min.js")
  }
}

{/* <script>window.MSInputMethodContext && document.documentMode && document.write('<script src="https://cdn.jsdelivr.net/gh/nuxodin/ie11CustomProperties@4.1.0/ie11CustomProperties.min.js"><\/script>');</script> */}
