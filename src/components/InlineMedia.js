import React from 'react'
import Img from 'gatsby-image'

export default function InlineMedia({
  mediaType,
  mediaId,
  inlineImageSource,
  inlineImageAlt,
}) {
  if (mediaType === 'image') {
    return (
      <>
        <Img fluid={inlineImageSource} alt={inlineImageAlt} key={mediaId} />
        <p>Image</p>
      </>
    )
  }
  if (mediaType === 'video') {
    return (
      <>
        <p>Figure out embedding a video here</p>
      </>
    )
  }
}
