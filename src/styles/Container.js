// This creates a container Component. The base component of this is the <Container>
// If you wish to use sub-components, such as a container that makes your section
// less wide, you can do so by putting a <Container> inside a <Container> with
// appropriate props, such as
// <Container>
//   <Container small>
//   </Container>
// </Container>

import styled, { css } from 'styled-components'

const Container = styled.div`
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  ${props =>
    props.small &&
    css`
      max-width: 768px;
    `}
  ${props =>
    props.medium &&
    css`
      max-width: 960px;
    `}
  ${props =>
    props.large &&
    css`
      max-width: 1190px;
    `}
  ${props =>
    props.xlarge &&
    css`
      max-width: 1440px;
    `}
  ${props =>
    props.fullWidth &&
    css`
      max-width: 100%;
      margin-left: 0;
      padding-left: 0;
      padding-right: 0;
    `}
  ${props =>
    props.paddingAll &&
    css`
      padding: 1rem;
    `}
  ${props =>
    props.paddingHorizontal &&
    css`
      padding-left: 1rem;
      padding-right: 1rem;
    `}
  ${props =>
    props.paddingVertical &&
    css`
      padding-top: 1rem;
      padding-bottom: 1rem;
    `}
  ${props =>
    props.paddingLeft &&
    css`
      padding-left: 1rem;
    `}
  ${props =>
    props.paddingRight &&
    css`
      padding-right: 1rem;
    `}
  ${props =>
    props.paddingTop &&
    css`
      padding-top: 1rem;
    `}
  ${props =>
    props.paddingBottom &&
    css`
      padding-bottom: 1rem;
    `}
  ${props =>
    props.paddingNone &&
    css`
      padding: 0;
    `}
`

export default Container
