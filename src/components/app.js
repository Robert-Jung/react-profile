import React from 'react'
import { Component } from 'react'

import Profile from '../containers/profile'
import SectionAbout from '../containers/section_about'

export default class App extends Component {
  render() {
    return (
      <div>
        <Profile />
        <div id='main'>
          <SectionAbout />
        </div>
      </div>
    );
  }
}
