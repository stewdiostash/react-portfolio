import React from "react";
import Header from "../components/Header";
import ProjectGrid from "../components/ProjectGrid";
import bandwich_thumb from "../assets/images/bandwich.png";
import weather_thumb from "../assets/images/forecast.png";
import burger_thumb from "../assets/images/burgerbuddy.png";
import ciphr_thumb from "../assets/images/ciphr.png";
import quiz_thumb from "../assets/images/quiz.png";
import team_thumb from "../assets/images/team-profile.png";
import { motion } from "framer-motion";

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "Ciphr",
      thumbnail: ciphr_thumb,
      summary: "Solve and share algorithms with your peers",
      url: "https://ciphr.dev/",
      github: "https://github.com/stewdiostash/ciphr",
    },
    {
      id: 2,
      title: "Bandwich",
      thumbnail: bandwich_thumb,
      summary:
        "A simple 4-track recording interface designed with collaboration in mind",
      url: "https://bandwich-app.herokuapp.com/",
      github: "https://github.com/stewdiostash/bandwich",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      thumbnail: weather_thumb,
      summary:
        " Responsive weather dashboard linked to multiple Openweathermap APIs",
      url: "https://stewdiostash.github.io/weather-dashboard/",
      github: "https://github.com/stewdiostash/weather-dashboard",
    },
    {
      id: 4,
      title: "Burger Buddy",
      thumbnail: burger_thumb,
      summary: "Keeping a persistent tally of cullinary conquests with MySQL",
      url: "https://burger-buddy-app.herokuapp.com/",
      github: "https://github.com/stewdiostash/burger-buddy",
    },
    {
      id: 5,
      title: "Code Quiz",
      thumbnail: quiz_thumb,
      summary: "An interactive, timed quiz to test coding knowledge",
      url: "https://stewdiostash.github.io/timed-code-quiz/",
      github: "https://github.com/stewdiostash/timed-code-quiz",
    },
    {
      id: 6,
      title: "Team Profile Generator",
      thumbnail: team_thumb,
      summary: "Node CLI that generates visual team member profiles",
      url: "https://github.com/stewdiostash/employee-profile-template-engine",
      github:
        "https://github.com/stewdiostash/employee-profile-template-engine",
    },
  ];
  return (
    <div className="container">
      <Header />
      <ProjectGrid projects={projects} />
    </div>
  );
};

export default Work;
