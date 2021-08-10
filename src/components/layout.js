import React from "react"
import { Helmet } from "react-helmet"
import Header from './header'
import Footer from './footer'

const Layout = (props) => {
    return(
        <div>
            <Helmet>
                <title>Better World Foundation</title>
                <body className="has-navbar-fixed-top" />
            </Helmet>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
    
}

export default Layout