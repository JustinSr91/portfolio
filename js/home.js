import React from 'react'
import { Link } from 'react-router'


export default React.createClass({
  render(){

    return(
      <section>
        <h1> Quick Info </h1>
          <img src="photo.jpg"></img>
          <li> Justin Strayhorn Sr.</li>
          <li> From San Antonio, Texas </li>
          <a href="https://github.com/JustinSr91">
            <li> Link to My GitHub </li>
          </a>
          @// TODO: Add bio paragraph
      </section>
    )
    }
  })
