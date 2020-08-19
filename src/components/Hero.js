import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

const HeroContainer = styled.div`
  height: 100vh;
`

function Hero() {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <HeroContainer>
      <div>
        <Image fluid={fluid} />
      </div>
    </HeroContainer>
  )
}

const query = graphql`
  {
    file(relativePath: { eq: "header_bg_2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default Hero
