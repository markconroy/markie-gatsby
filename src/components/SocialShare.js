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
  border: 1px solid var(--color-grey--dark);
  border-left: 5px solid var(--color-grey--dark);
  h2 {
    margin-top: 0;
    font-size: 1rem;
  }
  h2 ~ h2 {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid var(--color-grey--dark);
  }
  svg {
    width: 1.5rem;
    height: auto;
    path {
      fill: var(--color-secondary);
    }
  }

  .social-sharing__list {
    display: flex;
    margin: 0;
    padding: 0;
  }
  .social-sharing__list + .social-sharing__mailing-list {
    margin-top: var(--base-spacing);
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
const JoinMailingList = styled.div`
  @keyframes mailingList {
    0% {
      background-color: var(--color-secondary);
      border-radius: 0;
    }
    50% {
      background-color: var(--color-primary);
      border-radius: 10px;
    }
    100% {
      background-color: var(--color-secondary);
      border-radius: 0;
    }
  }
  a {
    background-color: var(--color-secondary);
    color: var(--color-white);
    font-weight: bold;
    text-align: center;
    display: block;
    padding: var(--base-spacing);
    animation: mailingList 20s infinite;
    text-decoration: underline;
  }
  a:hover,
  a:focus {
    background-color: var(--color-black);
    color: var(--color-white);
    text-decoration: none;
  }
`

export default function SocialShare({
  withShareLinks,
  withMailingList,
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
    <SocialShareStyles className="social-sharing">
      {withShareLinks ? (
        <>
          <h2>Share (please)</h2>
          <ul className="social-sharing__list">
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
        </>
      ) : (
        ''
      )}

      {withMailingList ? (
        <JoinMailingList className="social-sharing__mailing-list">
          <a href="https://markie.eo.page/xrpd5">
            Join the Markie Mailing List
          </a>
        </JoinMailingList>
      ) : (
        ''
      )}
    </SocialShareStyles>
  )
}
