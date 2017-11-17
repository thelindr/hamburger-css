import React from "react"
import ShoutyText from "lib/shouty-text"
import "./style.css"

const Button = props => (
  <button className={`shouty-button ${props.className}`}>
    <ShoutyText text={props.text} />
  </button>
)

export default Button
