import React from "react";
import as_photo from "../assets/images/as_photo.jpg";
import resume from "../assets/ref/as-resume-2020.pdf";

const About = () => {
  return (
    <div class="container">
      <div id="bio-grid">
        <img id="portrait" src={as_photo} alt="portrait" />

        <div id="link-group">
          <a
            class="social-link caption"
            href="https://github.com/stewdiostash"
            class="caption git-link"
          >
            On Github &rarr;
          </a>
          <a
            class="social-link caption"
            href="https://www.linkedin.com/in/andrewstewartwork/"
            class="caption git-link"
          >
            Linkedin &rarr;
          </a>
          <a
            class="social-link caption"
            href="https://stewdioland.com"
            class="caption git-link"
          >
            UX and design work &rarr;
          </a>
          <a class="social-link caption" href={resume} class="caption git-link">
            Resume &rarr;
          </a>
          <a
            class="social-link caption"
            href="mailto:andrew@stewdioland.com"
            class="caption git-link"
          >
            Email me! &rarr;
          </a>
        </div>
        <div class="statement thistle">
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
