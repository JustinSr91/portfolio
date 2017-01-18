import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <section>
        <heading className="blogHeading"> Blog Update </heading>
          <img src="css.jpg" className="photo"></img>
          <h1 className="blogTitle"> What is the difference between classes and IDs in CSS? </h1>
            <p className="blogDate"> Jan. 17th, 2017 </p>
            <p className="blogContent"> A class selector in CSS selects elements with specific attributes. Classes are preceded by a period.
                An ID selector uses the ID attribute of an HTML element, and is specific and unique to only one element. A hash character precedes the ID.

                In CSS, resetting removes all default styling from browser and presents a blank canvas. Normalizing is the use of the base stylesheet, and will reset styling back to standard starting point across all browsers.

                A float in CSS takes an element out of it's normal flow and places it on the outside of its surrounding container. Its four values are: left, right, inherit, and none.
            </p>
      </section>
    )
  }
})
