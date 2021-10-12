import React from 'react'

function Header() {
    return (
        <div className="fixed-top" style={{backgroundColor:'#222222', color:'#DBA601', borderBottom:'1px solid #DBA601'}} >
        <div className="row">
      <div className="col-md-12"> 
      <nav className="navbar navbar-expand-lg navbar-light">        
          <a className="navbar-brand" href="/" style={{color:'#DBA601'}}>
            VPN Solutions
          </a>
          <div id='nav' className='mt-1'>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link"
                  title="About Us"
                  aria-current="page"
                  href="#about"
                  style={{ color: "#DBA601" }}
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{ color: "#DBA601" }}
                  className="nav-link"
                  title="Product Features"
                  aria-current="page"
                  href="#features"
                >
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  title="Product Gallery"
                  aria-current="page"
                  href="#gallery"
                  style={{ color: "#DBA601" }}
                >
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  title="Product Reviews"
                  aria-current="page"
                  href="#reviews"
                  style={{ color: "#DBA601" }}
                >
                  Testimonials/Reviews
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  title="Contact Us"
                  aria-current="page"
                  href="#contact"
                  style={{ color: "#DBA601" }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>        
      </nav>
    </div>
    </div>
        </div>
    )
}

export default Header
