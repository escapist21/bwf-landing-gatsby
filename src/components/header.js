import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
    return(
        <div>
            <nav className='navbar' role='navigation' aria-label='main-navigation'>
        <div className='container'>
          <div className='navbar-brand'>
            <a className='navbar-item' href='/'>
              <StaticImage src="../assets/BWF_logo_Logo.png" width={240}/>
            </a>
          </div>
          {/* <!--The Hamburger will go here --> */}
          <div className='navbar-menu'>
            <div className='navbar-end'>
              <Link className='navbar-item has-text-weight-medium' to='/'>HOME</Link>
              <div className='navbar-item has-dropdown is-hoverable'>
                <Link className='navbar-link has-text-weight-medium' to='#'>ABOUT</Link>
                <div className='navbar-dropdown'>
                  <Link className='navbar-item is-uppercase has-text-weight-normal' to='#' >overview</Link>
                  <Link className='navbar-item is-uppercase has-text-weight-normal' to='#' >Meet the team</Link>
                </div>
              </div>
              {/* <Link className='navbar-item has-text-weight-medium' to='/our-work'>OUR WORK</Link>
              <div className='navbar-item has-dropdown is-hoverable'>
                <Link className='navbar-link is-uppercase has-text-weight-medium' to='#'>our reflections</Link>
                <div className='navbar-dropdown'>
                  <Link className='navbar-item is-uppercase has-text-weight-normal' to='#' >blog</Link>
                  <Link className='navbar-item is-uppercase has-text-weight-normal' to='#' >publications</Link>
                </div>
              </div> */}
              <Link className='navbar-item has-text-weight-medium' to='#'>CONTACT US</Link>
            </div>
          </div>
        </div>
      </nav>
        </div>
    )
}

export default Header
