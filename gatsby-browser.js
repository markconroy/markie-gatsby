/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// This runs every time a page is loaded or changed.
export const onRouteUpdate = () => {
  // Small delay to ensure DOM is fully available
  setTimeout(() => {
    const embeddedVideos = document.querySelectorAll('[data-media-source="remote_video"]');
    embeddedVideos.forEach(video => {
      const videoURL = video.dataset.mediaSourceFileId;
      const videoId = videoURL.split('/').pop();
      video.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
    });
  }, 100);
}
