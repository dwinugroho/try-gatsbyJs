/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navigation from "./Navigation/index"

const Layout = ({ children }) => {
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
      <Navigation siteTitle={data.site.siteMetadata.title} />
      <main id="main-content">{children}</main>
      <section className="container" style={{marginTop: '100px'}}>
        <hr />
        <footer className="footer">
          <p>
            Dwi Nugroho 
            <span role="img" aria-label="New Moon Face"> 🌚</span>
          </p>
          <section className="footer__menu">
            <a href="https://github.com/DwiNugroho" target="_blank" rel="noopener noreferrer" className="footer__link" >
              <p>
                Github
              </p>
            </a>
            <a href="https://medium.com/@dwinugrohoo" target="_blank" rel="noopener noreferrer" className="footer__link">
              <p>
                Medium
              </p>
            </a>
            <a href="https://www.linkedin.com/in/dwi-nugroho-462126138/" target="_blank" rel="noopener noreferrer" className="footer__link">
              <p>
                LinkedIn
              </p>
            </a>
          </section>
        </footer>
      </section>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
