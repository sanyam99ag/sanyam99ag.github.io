import React from "react"
// import { Link } from "gatsby"
import PropTypes from "prop-types"


// import MobileSocialLinks from "./MobileSocialLinks"
import MobilePageLinks from "./MobilePageLinks"
// import SocialLinks from "./SocialLinks"
import MobileBio from "./MobileBio"
import "./header.css"

const Header = ({ siteTitle, tagline, author, contacts }) => {

  return (
    <header
      className="head-main"
      style={{
        background: `#eee`
      }}
    >
      {/* <div className="head-elements"
        style={{
          margin: `0`,
          padding: `.75rem`
        }}
      >
        <h1 className="head-logo ml-4" style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `rgba(0,0,0,0.8)`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <SocialLinks contacts={contacts} />
      </div>
      <MobileSocialLinks contacts={contacts} /> */}
      <MobileBio author={author} />
      {/* <SocialLinks contacts={data.site.siteMetadata.contacts} /> */}
      <MobilePageLinks />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
