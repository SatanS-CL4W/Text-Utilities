import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="jav container-fluid">
        <a className="navbar-brand " href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active " aria-current="page" href="/">Home</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active " aria-current="page" href="/">{props.AboutUs}</a>
        </li>
        
        <li className="nav-item dropdown ">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Text Conversion
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">To UpperCase</a></li>
            <li><a className="dropdown-item" href="/">To LowerCase</a></li>
            <li><a className="dropdown-item" href="/">RemoveSpaces</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">FindLength</a></li>
          </ul>
        </li>
        
      </ul>
      <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div>
    </div>
  </div>
</nav>
    
    </>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};


Navbar.defaultProps = {
  title: 'Set Title Here',
  AboutUs: 'About'
  
}
