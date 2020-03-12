import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import withNavigation from '../hooks/withNavigation'
import Layout from '../components/layout'

const Slide = ({ data: { mdx: slide, backgroundImage } }) => (
  <Layout title={slide.frontmatter.title} background={backgroundImage}>
    <MDXRenderer>{slide.body}</MDXRenderer>
  </Layout>
)

export const query = graphql`
  query SlideQuery($index: Int!, $background: String) {
    mdx(frontmatter: { index: { eq: $index } }) {
      frontmatter {
        title
      }
      body
    }
    backgroundImage: file(relativePath: { eq: $background }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default withNavigation(Slide)
