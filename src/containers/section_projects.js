import React, { Component } from 'react'
import { connect } from 'react-redux'

class SectionProjects extends Component {
  renderProjects() {
    return this.props.projects.map((project, i = 0) => {
      return (
        <article key={i} className="6u work-item">
          <a href={project.url} target="_blank" className="image fit thumb"><img src={project.imgSrc} alt="" /></a>
          <h3>{project.name}</h3>
          <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
        </article>
      )
    })
  }

  render() {
    console.log(this.props.projects)
    return (
      <section id="two">
        <h2>Recent Work</h2>
        <div className="row">
          { this.renderProjects() }
        </div>
        <ul className="actions">
          <li><a href="https://github.com/Robert-Jung" target="_blank" className="button">Full Portfolio</a></li>
        </ul>
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects
  }
}

export default connect(mapStateToProps)(SectionProjects)
