import React from "react"
import Grid from "lib/grid"

import "./style.css"

class Header extends React.Component {

  render() {
    return (
      <header>
        <Grid className="header-grid">
          <a href="http://technigo.io">Technigo</a>
          <a href="http://technigo.io">Boot Camp</a>
          <a href="http://technigo.io">Stories</a>
          <a href="http://technigo.io">About</a>
        </Grid>
      </header>
    )
  }

}

export default Header
