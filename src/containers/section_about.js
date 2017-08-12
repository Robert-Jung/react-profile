import React, { Component } from 'react'
import { connect } from 'react-redux'

class SectionAbout extends Component {
  render() {
    console.log(this.props.project)
    return (
      <section id="one">
        <header className="major">
          <h2>About Me</h2>
        </header>
        <p>Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae lobortis tortor primis integer massa adipiscing id nisi accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque cubilia.</p>
        <ul className="actions">
          <li><a href="#" className="button">Download Resume</a></li>
        </ul>
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    project: state.project
  }
}

export default connect(mapStateToProps)(SectionAbout)
