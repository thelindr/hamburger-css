import React from "react"
import "./style.css"

const Grid = props => (
  <div className={`grid ${props.className}`}>
    {props.children}
  </div>
)

export default Grid
