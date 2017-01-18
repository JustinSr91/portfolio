import React from 'react'
import { Link } from 'react-router'


export default React.createClass({
  render(){

    return(
      <section>
        <h1> Quick Info </h1>
          <img src="photo.jpg"></img>
          <li className="infoList"> Justin Strayhorn Sr.</li>
          <li className="infoList"> From San Antonio, Texas </li>
          <a href="https://github.com/JustinSr91" className="link" target="_blank">
            <li className="infoList"> Link to My GitHub </li>
          </a>
          <p> My name is Justin and I am from Cincinnati, OH. I have lived in San Antonio for the last 5 years and have been in various roles with various companies. I have a background in Insurance, Oil and Gas, and Military, but I recently have decided to change careers (Software Development) where I know I can excel. I have a wife and 4 children who are my motivation to be the best version of myself that I can. I am currently hoping to obtain a Junior Developer position which will give me the experience I need to become highly skilled.</p>
      </section>
    )
    }
  })
