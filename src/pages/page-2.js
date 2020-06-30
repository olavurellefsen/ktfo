import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"

const Content = () => (
  <Layout>
    <StaticQuery
      query={graphql`
        query {
          allStrapiMember {
            edges {
              node {
                Title
                Description
                Url
                Logo {
                  publicURL
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div>
          <div>
            <h1>Members</h1>
            <img
              src={data.allStrapiMember.edges[0].node.Logo.publicURL}
              height="250"
              width="250"
            />
            <div>{data.allStrapiMember.edges[0].node.Title}</div>
          </div>
        </div>
      )}
    />
  </Layout>
)

export default Content
