import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import withNavigation from '../hooks/withNavigation'
import Layout from '../components/layout'

const Slide = ({ data: { mdx: slide, backgroundImage } }) => (
  <Layout
    title={slide.frontmatter && slide.frontmatter.title}
    background={backgroundImage}
  >
    <div>
      <MDXRenderer>{slide.body}</MDXRenderer>
    </div>
  </Layout>
)

/*
  === Start Exercise 2 ===
  === do: Retrieve 1 MDX file based on a variable passed in by createPages context in gatsby-node.js
  === tip: query for the `body` and frontmatter `title` fields
  === tip: Use the GraphQL playground to find possible queries and variables in your API
  ===
  === bonus: Query the `backgroundImage` from the context (The Slide component above accepts one)
  === tip: backgroundImage does not exist in your API, its created by querying `backgroundImage: file() {}`
  === tip: Query for the fluid image data by using a GraphQL fragment from Gatsby `...GatsbyImageSharpFluid`
  === tip: Read the docs -> https://www.gatsbyjs.org/docs/working-with-images/
  */
export const query = graphql`
  query SlideQuery(<!-- your solution goes here -->) {
    <!-- your solution goes here -->
  }
`
/* === End Exercise 2 === */

export default withNavigation(Slide)
