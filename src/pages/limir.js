import React from "react"
import styled from "styled-components"
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
        <ContentContainer>
          <HeaderStyle>Limir í KT-felagnum</HeaderStyle>
          <LimirContainer>
            {data.allStrapiMember.edges.map((edge, i) => (
              <LimurStyle key={i}>
                <LinkStyle href={edge.node.Url}>
                  <ImageStyle
                    src={edge.node.Logo.publicURL}
                    alt={edge.node.Title}
                  />
                </LinkStyle>
                <DescriptionStyle>{edge.node.Description}</DescriptionStyle>
              </LimurStyle>
            ))}
          </LimirContainer>
        </ContentContainer>
      )}
    />
  </Layout>
)

const ContentContainer = styled.div``

const HeaderStyle = styled.h1``

const LimirContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 100vw;
  padding: 0;
`

const LimurStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  max-width: 300px;
  margin: 0;
  padding: 0 0 40px 0;
`

const LinkStyle = styled.a``

const ImageStyle = styled.img`
  height: 250px;
  width: 250px;
  margin: 0;
`

const DescriptionStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 100vw;
  padding: 0;
`

export default Content
