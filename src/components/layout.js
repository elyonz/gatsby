import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { CSSTransition } from 'react-transition-group'
import styled, { createGlobalStyle } from 'styled-components'

const Layout = ({ title, background, children }) => {
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
      <BodyStyle />

      <Title to="/1">{title || data.site.siteMetadata.title}</Title>

      <CSSTransition appear in timeout={300}>
        {state => (
          <Container status={state}>
            {background ? (
              <BackgroundImage
                fadeIn={false}
                style={{ width: '100vw', height: '100vh' }}
                fluid={background.childImageSharp.fluid}
              >
                {children}
              </BackgroundImage>
            ) : (
              children
            )}
          </Container>
        )}
      </CSSTransition>
    </>
  )
}

const Container = styled.div`
  position: absolute;
  transition: all 300ms ease-out;
  opacity: ${props => (props.status === `entered` ? 1 : 0)};

  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  text-align: center;

  -webkit-overflow-scrolling: touch;
`

const Title = styled(Link)`
  position: absolute;
  top: 10px;
  left: 10px;
  text-decoration: none;
  color: grey;

  > span {
    color: black;
  }
`

const BodyStyle = createGlobalStyle`
  body {
    margin: 0;
    overflow: hidden;
  }
`

export default Layout
