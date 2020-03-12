exports.createPages = async ({ actions, graphql, reporter }) => {
  /*
  === Start Exercise 1 ===
  === do: Retrieve all the mdx files from ./src/slides with a GraphQL query
  === tip: Use the GraphQL playground to find possible queries in your API
  === bonus: find a way to sort your query data numerically and alphabetically (within your query)
  */
  const result = await graphql`
    query {
      <!-- your solution goes here -->
    }
  `
  /* === End Exercise 1 === */

  const slides = nodes.sort((a, b) => a.frontmatter.index - b.frontmatter.index)

  if (result.errors) {
    reporter.panic('failed to fetch slides', result.errors)
  }

  const nodes = result.data.allMdx.nodes
  const slides = nodes.sort((a, b) => a.frontmatter.index - b.frontmatter.index)

  slides.forEach((slide, index) => {
    actions.createPage({
      path: `/${index + 1}`,
      component: require.resolve('./src/templates/slide.js'),
      context: {
        index: slide.frontmatter.index,
        total: slides.length,
        background: `${slide.frontmatter.background}`,
      },
    })
  })
}

/**



  👀 Looking for an internship or job at the best employer in Zwolle? 👀
                        👉 https://arcady.nl/ 👈



*/
