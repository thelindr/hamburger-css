import React from "react"
import "./style.css"

const ShoutyText = props => (
  <div className={`shouty-text ${props.className}`}>
    {props.text}
  </div>
)

export default ShoutyText
