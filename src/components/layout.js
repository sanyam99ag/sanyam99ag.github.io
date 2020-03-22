import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.css"
import Header from "./header/header"
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <StaticQuery
      query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            tagline
            author
            contacts {
              linkedin
              github
              twitter
            }
          }
        }
      }
    `}
      render={data => (
        <>
          <Header
            siteTitle={data.site.siteMetadata.title}
            tagline={data.site.siteMetadata.tagline}
            author={data.site.siteMetadata.author}
            contacts={data.site.siteMetadata.contacts} />
          <div
            style={{
              margin: `0 auto`,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
          >
            <main className="p-4">{children}</main>
            <footer className="text-center">
              <hr/>
              <p className="d-inline">© {new Date().getFullYear()} <a className="text-info" href="https://sanyam99ag.github.io/">sanyam99ag</a>, All Rights Reserved.</p>
              <p className="mt-5 text-muted d-inline"><i> Built with
                            {` `}
                <a className="text-info" href="https://www.gatsbyjs.org">Gatsby</a></i>
              </p>
            </footer>
          </div>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
