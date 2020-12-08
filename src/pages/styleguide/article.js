import React from 'react'
import SingleArticlePageTemplate from '../../templates/article/ArticleTemplate'

export default function StyleguideArticlePage() {
  const tags = [
    {
      id: '82a8e0c0-40a0-5862-a717-076956d33210',
      name: 'Sample Tag 1',
      path: {
        alias: '/tags/frontend-development',
      },
    },
    {
      id: 'b4d28d41-1a37-5793-b66e-cc095a4f41f3',
      name: 'Sample Tag 2',
      path: {
        alias: '/tags/css',
      },
    },
    {
      id: 'f8fa6598-afd1-57c7-a8fa-9e9a7021bc8a',
      name: 'Sample Tag 3',
      path: {
        alias: '/tags/javascript',
      },
    },
  ]
  return (
    <SingleArticlePageTemplate
      articleTitle="howdy"
      articleBody="<p>This is the body"
      tags={tags}
    />
  )
}
