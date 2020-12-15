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
      articleTitle="This is the Title of the Article"
      articleBody={`
        <p>This is the body of the article.</p>
        <p>Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
        <p>Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
      `}
      tags={tags}
    />
  )
}
