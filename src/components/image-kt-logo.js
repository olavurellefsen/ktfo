import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const ImageSection = siteTitle => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "kt-felagid.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 255) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return <ImgStyle fluid={imageData} alt={siteTitle} />
    }}
  />
)

const ImgStyle = styled(Img)`
  min-width: 255px;
  min-height: 33.5px;
  width: 255px;
  height: 33.5px;
  max-width: 45vw;
  max-height: 5.91vw;
  position: static;
  z-index: 10;
`

ImageSection.propTypes = {
  siteTitle: PropTypes.string,
}

export default ImageSection
