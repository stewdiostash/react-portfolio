import React from "react";
import as_photo from "../assets/images/as_photo.jpg";
import resume from "../assets/ref/as-resume-2020.pdf";

const About = () => {
  return (
    <div className="container">
      <div id="bio-grid">
        <img id="portrait" src={as_photo} alt="portrait" />

        <div id="link-group">
          <a
            className="social-link caption git-link"
            href="https://github.com/stewdiostash"
          >
            On Github &rarr;
          </a>
          <a
            className="social-link caption git-link"
            href="https://www.linkedin.com/in/andrewstewartwork/"
          >
            Linkedin &rarr;
          </a>
          <a
            className="social-link caption git-link"
            href="https://stewdioland.com"
          >
            UX and design work &rarr;
          </a>
          <a className="social-link caption git-link" href={resume}>
            Resume &rarr;
          </a>
          <a
            className="social-link caption git-link"
            href="mailto:andrew@stewdioland.com"
          >
            Email me! &rarr;
          </a>
        </div>
        <div className="statement thistle">
          <p>
            I believe the digital products we use every day fundamentally change
            the way we see the world, and I aspire to help shape experiences
            that delight, inspire and empower end users.
          </p>

          <p>Currently enrolled in Georgia Tech's Full Stack Flex Bootcamp.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
