/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import Header from "./header"
import "@fontsource/raleway"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `RawMaterial`} /> */}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "5rem",
          }}
        >
          <a
            style={{
              textDecoration: "underline",
              color: "#fff",
              fontSize: "0.8rem",
              display: "inline-block",
              marginBottom: "0",
            }}
            href="mailto:info@rawmaterial.it"
          >
            info@rawmaterial.it
          </a>
          <a
            style={{
              textDecoration: "underline",
              color: "#fff",
              fontSize: "0.8rem",
              display: "inline-block",
              marginBottom: "0",
            }}
            href="mailto:rawmaterial@mypec.eu"
          >
            rawmaterial@mypec.eu
          </a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
