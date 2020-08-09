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
      <Title title="about" />
      <Image fixed={data.person.childImageSharp.fixed} className="img" />
      <p>Information about me</p>
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
`
export default About
