import React from "react"

import "./header.css"
import profile from "../../images/sanyam.jpg"

const MobileBio = (props) => {

    return (
        <div className="mobile-bio-main">
            <img src={profile}  className="ml-5 mt-2" style={{ maxWidth: `75px`, maxHeight: `75px`, borderRadius: `50%`,boxShadow: `1px 1px 3px`}} alt="author-pic" />
            <h4 className="mr-5 mt-4">{props.author}<br/></h4>
        </div>
    )
}

export default MobileBio