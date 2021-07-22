import React from 'react'
import styled from 'styled-components'

const VideoContainerStyles = styled.div`
  padding: 1rem;
  box-shadow: var(--box-shadow);
`
const VideoInnerStyles = styled.div`
  position: relative;
  padding: 1rem;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const Video = ({ videoSrcURL, videoTitle, mediaId, ...props }) => (
  <VideoContainerStyles>
    <VideoInnerStyles>
      <iframe
        src={videoSrcURL}
        title={videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
    </VideoInnerStyles>
  </VideoContainerStyles>
)
export default Video
