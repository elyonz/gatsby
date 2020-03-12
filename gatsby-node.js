/**
  === SETUP ===
  ===
  === install Node.js LTS version (npm) -> https://nodejs.org/en/download/
  === install vscode (or use your own IDE) -> https://code.visualstudio.com/
  === optional for this workshop -> vscode extension MDX
  ===
  === after installing Node.js use npm to install the gatsby-cli -> `npm i -g gatsby-cli`
  === use gatsby cli to create a new starter -> `gatsby new deck elyonz/gatsby` 
  === use -> `gatsby develop` or -> `npm run start` to run the project
  ===
  === development url -> http://localhost:8000/
  === graphql playground url -> http://localhost:8000/___graphql
  ===
*/

exports.createPages = async ({ actions, graphql, reporter }) => {
  /*
  === Start Exercise 1 ===
  === step 1: 
  === tip: Use the GraphQL playground to find possible queries in your API
  === bonus: find a way to sort your query data alphabetically (within your query)
  */
  const result = await graphql(`
    query {
      <!-- your solution goes here -->
    }
  `)
  /* === End Exercise 1 === */

  /* 
  SORT by index

  const result = await graphql(`
    query {
      allMdx(sort: {fields: frontmatter___index}) {
        nodes {
          frontmatter {
            index
          }
        }
      }
    }
  `) 
  
  ||||=======||||

  const slides = nodes.sort((a, b) => a.frontmatter.index - b.frontmatter.index)
  */

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
