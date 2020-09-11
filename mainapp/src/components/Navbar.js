import React from 'react'
import { FaGithub } from "react-icons/fa";
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Navbar = ({title}) => {

    return (
      <nav className="navbar" style = {{backgroundColor: 'yellow'}}>
        <h1><FaGithub/>{title}</h1> 
      </nav>
    )
  }

Navbar.defaultProps = {
  title : 'Github Finder',
}

Navbar.propTypes = {
  title: Proptypes.string.isRequired,
}
export default Navbar;
