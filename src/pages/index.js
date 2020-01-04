import React from 'react'
import { Link, graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from "../components/layout"

const IndexPage = ({ data }) => (
  <Layout>
    <iframe src="https://player.vimeo.com/video/328818285?app_id=122963&amp;wmode=opaque" width="640" height="360" frameborder="0" title="SOW Official Trailer (2019)" allow="autoplay; fullscreen" allowfullscreen="" id="yui_3_17_2_1_1578155748692_114"></iframe>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allDatoCmsWork(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          title
          slug
          excerpt
          coverImage {
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`
