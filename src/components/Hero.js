import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

const query = graphql`
  {
    person: file(relativePath: {eq: "geekBrain.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = ({showPerson}) => {
  const { person } = useStaticQuery(query)
  return (
    <header className="hero">
      { showPerson && ( 
        <section className="header-container">
          <div className="headSpot">
            <Image fluid={person.childImageSharp.fluid} className="hero-person" />
          </div>
          <div className="headSpot">
            <h1 className="siteName">Mental Geek</h1>
            <h4 className="siteInfo">A Mental Health Community</h4>
          </div>
        </section>
      )}
      
  </header>
  )
}

export default Hero
