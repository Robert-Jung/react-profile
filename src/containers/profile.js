import React, { Component } from 'react'
import { connect } from 'react-redux'

class Profile extends Component {
  render() {
    console.log(this.props.test)
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
            <li><a href="#" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
          </ul>
        </div>
      </header>
    )
  }
}

function mapStateToProps(state) {
  return {
    test: state.test
  }
}

export default connect(mapStateToProps)(Profile)
