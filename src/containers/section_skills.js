import React, { Component } from 'react'

export default class SecionSkills extends Component {
  render() {
    return (
      <section id="two">
        <h2>Technical Skills</h2>
        <div className="skill">
          <h3>FRONTEND</h3>
          <a className="icon"><i className="devicon devicon-javascript-plain"></i></a>
          <i className="devicon devicon-html5-plain"></i>
          <i className="devicon devicon-css3-plain"></i>
          <i className="devicon devicon-bootstrap-plain-wordmark"></i>
          <i className="devicon devicon-nodejs-plain"></i>
          <i className="devicon devicon-express-original"></i>
          <i className="devicon devicon-react-original-wordmark"></i>
          <i className="devicon devicon-babel-plain"></i>
          <i className="devicon devicon-angularjs-plain"></i>
          <i className="devicon devicon-typescript-plain"></i>
        </div>
        <div className="skill">
          <h3>BACKEND</h3>
          <i className="devicon devicon-postgresql-plain-wordmark"></i>
          <i className="devicon devicon-mongodb-plain-wordmark"></i>
        </div>
        <div className="skill">
          <h3>DEVTOOLS</h3>
          <i className="devicon devicon devicon-chrome-plain"></i>
          <i className="devicon devicon-github-plain-wordmark"></i>
          <i className="devicon devicon-atom-original"></i>
          <i className="devicon devicon-visualstudio-plain"></i>
          <i className="devicon devicon-slack-plain-wordmark"></i>
          <i className="devicon devicon-amazonwebservices-plain-wordmark"></i>
        </div>
      </section>
    )
  }
}
