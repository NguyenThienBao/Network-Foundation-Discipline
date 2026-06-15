import React from "react"
import './style.css'
import Products from "../Products"

const Content : React.FC = () => {
  return (
    <div className='content'>
      <h2>Content of pages</h2>
      <hr />
      <Products />
    </div>
  )
}

export default Content