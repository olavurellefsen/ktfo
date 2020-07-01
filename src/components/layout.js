import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <MainContainer>
        <main>{children}</main>
      </MainContainer>
      <FooterStyle>
        <UpperFooter>
          KT-felagið | Óðinshædd 7 | Tórshavn | Faroe Islands | +298 739905 |{` `}
          <LinkStyle1 href="mailto:marius@industry.fo">
            marius@industry.fo
          </LinkStyle1>
        </UpperFooter>
        <LowerFooter>
          © {new Date().getFullYear()} KT-felagið,{` `}
          <LinkStyle2 href="https://www.tokni.fo">Tøkni</LinkStyle2> hevur ment
        </LowerFooter>
      </FooterStyle>
    </>
  )
}

const MainContainer = styled.div`
  margin: 0 auto;
  max-width: 1020px;
  padding: 0 1.0875rem 1.45rem;
`

const FooterStyle = styled.footer`
  background-color: rgb(224, 224, 224);
  font-size: 16px;
  line-height: 1.6em;
  letter-spacing: 0px;
  font-weight: 700;
`

const UpperFooter = styled.div`
  max-width: 1020px;
  margin: 30px auto 0 auto;
  padding: 60px 0 20px 0;
  color: black;
  text-transform: uppercase;
  text-align: center;
`

const LowerFooter = styled.div`
  max-width: 1020px;
  margin: 0 auto;
  padding: 0 0 80px 0;
  color: white;
  text-align: center;
`

const LinkStyle1 = styled.a`
  color: black;
  text-decoration: none;
`

const LinkStyle2 = styled.a`
  color: white;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
