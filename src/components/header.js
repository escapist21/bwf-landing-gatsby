import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  const [isActive, setisActive] = React.useState(false);
    return(
        <div>
            <nav className='navbar is-fixed-top' role='navigation' aria-label='main-navigation'>
            <div className='container'>
              <div className='navbar-brand'>
                <a className='navbar-item' href='/'>
                  <StaticImage src="../assets/BWF_logo_Logo.png" />
                </a>
                <a 
                onClick={() => {
                  setisActive(!isActive);
                }} 
                role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
              </div>
              
              <div id="navbarBasicExample" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
                <div className='navbar-end'>
                  <Link className='navbar-item has-text-weight-medium' to='/'>HOME</Link>
                  <div className='navbar-item has-dropdown is-hoverable'>
                    <Link className='navbar-link has-text-weight-medium' to='#'>ABOUT</Link>
                    <div className='navbar-dropdown'>
                      <Link className='navbar-item is-uppercase has-text-weight-normal' to='/overview' >overview</Link>
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
                  <Link className='navbar-item has-text-weight-medium' to='/contact-us'>CONTACT US</Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
    )
}

export default Header
