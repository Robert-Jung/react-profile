import React, { Component } from 'react'

export default class Profile extends Component {
  render() {
    return (
      <header id='header'>
        <div className='inner'>
          <a href="#" className="image avatar">
          <img src="/src/assets/css/images/avatar.png" alt="" /></a>
          <h1>
            <strong>Enter Name</strong>
          </h1>
          <h3>Enter Description</h3>
          <ul className="icons">
            <li><a href="#" className="icon fa-github"><span className="label">Github</span></a></li>
            <li><a href="#" className="icon fa-linkedin"><span className="label">Email</span></a></li>
            <li><a href="#" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
          </ul>
        </div>
      </header>
    )
  }
}
