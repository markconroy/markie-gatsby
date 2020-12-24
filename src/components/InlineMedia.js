import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const InlineMediaStyles = styled.div`
  img[aria-hidden] {
    opacity: 0 !important;
    transition: 0 !important;
  }
  picture img {
    opacity: 1 !important;
    transition: 0 !important;
  }
`

export default function InlineMedia({
  mediaType,
  mediaId,
  inlineImageSource,
  inlineImageAlt,
  videoUrl,
}) {
  if (mediaType === 'image') {
    return (
      <>
        <InlineMediaStyles className="marky">
          <Img fluid={inlineImageSource} alt={inlineImageAlt} key={mediaId} />
        </InlineMediaStyles>
      </>
    )
  }
  if (mediaType === 'video') {
    return (
      <>
        <p>
          <mark>Figure this out</mark> Video URL: {videoUrl}
        </p>
      </>
    )
  }
}
