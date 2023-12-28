import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="aboutpage">
      <div className="container">
        <h2>About Us</h2>
        <p>
          Welcome to our application! This is a brief introduction about our
          team or the purpose of the application.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo.
        </p>
        <p style={{textAlign:'center',marginTop:'3em'}}>
          Learn more about us on our <a href="/team">Team Page</a>.
        </p>
      </div>
    </div>
  );
}
