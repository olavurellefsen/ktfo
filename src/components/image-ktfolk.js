import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const ImageSection = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "kt-folk-i-foroyum.png" }) {
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
  min-width: 285px;
  min-height: 300px;
  width: 405px;
  height: 423px;
  max-width: 90vw;
  max-height: 94vw;
  position: static;
  z-index: 10;
  margin: 20px 0;
`

ImageSection.propTypes = {
  siteTitle: PropTypes.string,
}

export default ImageSection
