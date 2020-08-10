import React from 'react'
import SocialLinks from '../../constants/socialLinks'
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import Title from './Title'
import styled from 'styled-components'


 const query = graphql`
  {
    person: file(relativePath: {eq: "banner-about.jpeg"}) {
      childImageSharp {
        fixed (width:100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`


const About = () => {
  const data = useStaticQuery(query)
  return (
    <Wrapper>
      <Title title="Subscribe" />
      <form
        className="contact-side"
        name="testing-contact"
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        action="/success"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="testing-contact" />

        <input
          type="text"
          name="name"
          placeholder="Name"
          className="form-side"
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          className="form-side"
        />
        <button type="submit" className="btn form-side submit-btn">
          Subscribe
        </button>
      </form>
    </Wrapper>
  ) 
}

const Wrapper = styled.div`
  text-align: center;
  p {
    color: var(--clr-grey-5);
  }
  .img {
    border-radius: 50%;
  }

  .contact-side {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .form-side {
    padding: 0.5rem;
    border: 0.5px solid var(--clr-grey-9);
    font-size: 1rem;
    margin: 0.25rem 0;
    border-radius: var(--radius);
    display: block;
    width: 100%;
  }
  .submit-btn {
    font-weight: 400;
    text-transform: capitalize;
    border-color: var(--clr-primary-5);
    border-right: var(--clr-primary-5);
    width: 100%;
  }
  .submit-btn:hover {
    border-color: var(--clr-primary-8);
    border-right: var(--clr-primary-8);
  }
  @media screen and (min-width: 992px) {
    .contact-side {
      flex-direction: row;
      width: 100%;
    }
    .form-side {
      width: 98%;
    }
    input[type='text'] {
      width: 98%;
    }
    input[type='email'] {
      width: 98%;
    }
    .submit-btn {
      border-radius: 10px;
      width: 98%;
    }
  }
`
export default About
