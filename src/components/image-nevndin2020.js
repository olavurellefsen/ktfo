import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const ImageSection = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "nevndin2020.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 620) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return <ImgStyle fluid={imageData} />
    }}
  />
)

const ImgStyle = styled(Img)`
  min-width: 180px;
  min-height: 122px;
  width: 620px;
  height: 455px;
  max-width: 90vw;
  max-height: 66vw;
  position: static;
  z-index: 10;
  margin: 20px 0;
`

ImageSection.propTypes = {
  siteTitle: PropTypes.string,
}

export default ImageSection
