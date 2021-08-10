import React from "react"
import { Helmet } from "react-helmet"
import Header from './header'
import Footer from './footer'
import SEO from "./seo"

const Layout = (props) => {
    return(
        <div>
            {/* <Helmet>
                <title>Better World Foundation</title>
                <body className="has-navbar-fixed-top" />
            </Helmet> */}
            <SEO />
            <Header />
            {props.children}
            <Footer />
        </div>
    )
    
}

export default Layout