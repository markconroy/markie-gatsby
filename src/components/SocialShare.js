import React from 'react'

import styled from 'styled-components'

import {
  TwitterIcon,
  FacebookIcon,
  LinkedInIcon,
  WhatsAppIcon,
  EmailIcon,
} from './icons'

const SocialShareStyles = styled.div`
  margin-top: 3rem;
  padding: 2rem;
  border: 1px solid var(--color-grey--light);
  h2 {
    margin-top: 0;
    font-size: 1rem;
  }
  svg {
    width: 1.5rem;
    height: auto;
    path {
      fill: var(--color-secondary);
    }
  }

  ul {
    display: flex;
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
    margin-right: 1rem;
  }
  a {
    border-bottom: 0;
  }
  a:hover,
  a:focus {
    svg path {
      fill: var(--color-primary);
    }
  }
`

export default function SocialShare({
  twitterText,
  whatsAppText,
  linkedInTitle,
  linkedInSummary,
  emailSubject,
  emailBody,
  shareLink,
}) {
  const URL = shareLink
  return (
    <>
      <SocialShareStyles className="social-sharing">
        <h2>Share (please)</h2>
        <ul>
          <li>
            <a
              href={`https://twitter.com/intent/tweet/?text=${twitterText} by @markconroy%0a%0a&url=${URL}`}
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon />
              <span className="visually-hidden">Share via Twitter</span>
            </a>
          </li>

          <li>
            <a
              href={`https://facebook.com/sharer/sharer.php?u=${URL}`}
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon />
              <span className="visually-hidden">Share via Facebook</span>
            </a>
          </li>

          <li>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${URL}&amp;title=${linkedInTitle}&summary=${linkedInSummary}&source=${URL}`}
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
              <span className="visually-hidden">Share via LinkedIn</span>
            </a>
          </li>

          <li>
            <a
              href={`whatsapp://send?text=Checkout%20this%20article%20by%20Mark%20Conroy.%0a%0a${whatsAppText}%0a%0a${URL}`}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon />
              <span className="visually-hidden">Share via Whatsapp</span>
            </a>
          </li>

          <li>
            <a
              href={`mailto:?subject=${emailSubject}&body=${emailBody} - ${URL}`}
              target="_blank"
              rel="noreferrer"
            >
              <EmailIcon />
              <span className="visually-hidden">Share via Email</span>
            </a>
          </li>
        </ul>
      </SocialShareStyles>
    </>
  )
}
