import React from 'react'
import Img from 'gatsby-image'

export default function InlineMedia({
  mediaType,
  inlineImageSource,
  inlineImageAlt,
}) {
  if (mediaType === 'image') {
    return <Img fluid={inlineImageSource} alt={inlineImageAlt} />
  }
  if (mediaType === 'video') {
    return (
      <>
        <p>Figure out embedding a video here</p>
      </>
    )
  }
}
