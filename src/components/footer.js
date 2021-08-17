import React from "react"
import MailChimpForm from "./newsletter-form"

const Footer = () => {
    return(
        <footer className="footer pb-5">
            <MailChimpForm />
            <div className="content has-text-centered">
                <p className="has-text-white pt-2">©2021 Better World Foundation. All Rights Reserved. </p>
            </div>
        </footer>
    )
}

export default Footer