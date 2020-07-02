import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import ReactMarkDown from "react-markdown"
import Layout from "../components/layout"
import imageForoysKT from "../images/foroyskt.gif"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Heim" />
    <MainContainer>
      <LeftContainer>
        <img src={imageForoysKT} alt="FøroysKT" />
      </LeftContainer>
      <RightContainer>
        <StaticQuery
          query={graphql`
            query {
              allStrapiPage(filter: {pagename: {eq: "heim"}}) {
                edges {
                  node {
                    content
                  }
                }
              }
            }
          `}
          render={data => (
            <div>
              <ReactMarkDown
                source={data.allStrapiPage.edges[0].node.content}
              />
            </div>
          )}
        />
      </RightContainer>
    </MainContainer>
  </Layout>
)

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const LeftContainer = styled.div`
  flex: 1;
`

const RightContainer = styled.div`
  flex: 1;
  padding: 30px 0 0 30px;
  a {
    text-decoration: none;
  }
`

export default IndexPage
