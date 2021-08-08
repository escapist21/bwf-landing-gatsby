import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const OurServices = () => {
    return(
        <div className="container my-5 py-5">
            <div className="column">
                <p className="title has-text-centered pb-5 has-text-weight-light is-size-2">
                    OUR SERVICES
                </p>
            </div>
            <nav className="level">
                <div className="level-item has-text-centered">
                    <figure className="image is-128x128">
                        <StaticImage src="../assets/BWF_icons_project_management.png" alt="" />
                        <p className="title is-size-5 is-uppercase has-text-weight-light">Advisory & Project Management</p>
                    </figure>
                </div>
                <div className="level-item has-text-centered">
                    <figure className="image is-128x128">
                        <StaticImage src="../assets/BWF_icons_research.png" alt="" />
                        <p className="title is-size-5 is-uppercase has-text-weight-light">Research & Analytics</p>
                    </figure>
                </div>
                <div className="level-item has-text-centered">
                    <figure className="image is-128x128">
                        <StaticImage src="../assets/BWF_icons_solutions.png" alt="" />
                        <p className="title is-size-5 is-uppercase has-text-weight-light">Evidence-based Solutions</p>
                    </figure>
                </div>
            </nav>
        </div>
    )
}

export default OurServices