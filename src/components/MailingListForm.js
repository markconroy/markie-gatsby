import React, { useState } from 'react'

function ContactForm() {
  const theForm = () => {
    fetch(
      `https://emailoctopus.com/api/1.6/lists/${process.env.list_id}/contacts`,
      {
        method: 'POST',
        port: 443,
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          api_key: process.env.email_octopus_api_key,
          email_address: 'joe@bloggs.com',
          fields: {
            FirstName: 'Joe',
            LastName: 'Bloggs',
            Birthday: '2020-12-20',
          },
          tags: ['vip'],
          status: 'SUBSCRIBED',
        }),
      }
    )
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <form onSubmit={theForm} target="_blank">
      <div>
        <button type="submit"> Send a message </button>
      </div>
    </form>
  )
}

export default ContactForm
