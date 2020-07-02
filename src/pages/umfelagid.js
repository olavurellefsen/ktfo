import React from "react"
import { StaticQuery, graphql } from "gatsby"
import ReactMarkDown from "react-markdown"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Um felagið" />
    <StaticQuery
      query={graphql`
        query {
          allStrapiPage(filter: { pagename: { eq: "umfelagid" } }) {
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
          <ReactMarkDown source={data.allStrapiPage.edges[0].node.content} />
        </div>
      )}
    />
  </Layout>
)

export default IndexPage
