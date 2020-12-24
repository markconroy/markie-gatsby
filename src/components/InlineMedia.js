import React from 'react'
import Img from 'gatsby-image'

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
        <Img fluid={inlineImageSource} alt={inlineImageAlt} key={mediaId} />
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
