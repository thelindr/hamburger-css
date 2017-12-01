import React from "react"
import Grid from "lib/grid"

import "./style.css"

class Header extends React.Component {

  render() {
    return (
      <header>
        <Grid className="header-grid">
          <label className="hamburger" htmlFor="hamburger" />
          <input id="hamburger" type="checkbox" className="hamburger-checkbox" />
          <div className="menu">
            <a href="http://technigo.io">Technigo</a>
            <a href="http://technigo.io">Boot Camp</a>
            <a href="http://technigo.io">Stories</a>
            <a href="http://technigo.io">About</a>
          </div>
        </Grid>
      </header>
    )
  }

}

export default Header
