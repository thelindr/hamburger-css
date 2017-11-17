import React from "react"
import Grid from "lib/grid"

import "./style.css"

class Header extends React.Component {

  render() {
    return (
      <header>
        <Grid className="header-grid">
          <a href="">Technigo</a>
          <a href="">Boot Camp</a>
          <a href="">Stories</a>
          <a href="">About</a>
        </Grid>
      </header>
    )
  }

}

export default Header
