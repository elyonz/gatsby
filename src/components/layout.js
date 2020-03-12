import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'
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
          <>
            {background && (
              <Image fadeIn={false} fluid={background.childImageSharp.fluid} />
            )}

            <Container status={state}>
              <div>{children}</div>
            </Container>
          </>
        )}
      </CSSTransition>
    </>
  )
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
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
  z-index: 999;

  > span {
    color: black;
  }
`

const Image = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const BodyStyle = createGlobalStyle`
  body {
    margin: 0;
    overflow: hidden;
  }
`

export default Layout
