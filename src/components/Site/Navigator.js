import React from 'react'
import {Link, NavLink} from 'react-router-dom'

class Navigator extends React.Component{
  render() {
    return (
      <ul className="nav d-flex justify-content-center pt-3">
        <li className="nav-item mx-2">
          <NavLink exact to="/" className="nav-item" activeClassName="disabled">Home</NavLink>
        </li>

        <li className="nav-item mx-2">
          <Link to="/about" className="nav-item">About</Link>
        </li>

        <li className="nav-item mx-2">
          <Link to="/detail" className="nav-item">Detail</Link>
        </li>

        <li className="nav-item mx-2">
          <Link to="/topics" className="nav-item">Topics</Link>
        </li>
      </ul>
    )
  }
}

export default Navigator