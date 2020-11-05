import React from "react";
import Header from "../components/Header";
import ProjectGrid from "../components/ProjectGrid";
import bandwich_thumb from "../assets/images/bandwich.png";
import weather_thumb from "../assets/images/forecast.png";
import burger_thumb from "../assets/images/burgerbuddy.png";
import playtsafe_thumb from "../assets/images/playtsafe.png";

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "Bandwich",
      thumbnail: bandwich_thumb,
      summary:
        "A simple 4-track recording interface designed with collaboration in mind",
      url: "https://bandwich-app.herokuapp.com/",
      github: "https://github.com/stewdiostash/bandwich",
    },
    {
      id: 2,
      title: "Weather Dashboard",
      thumbnail: weather_thumb,
      summary:
        " Responsive weather dashboard linked to multiple Openweathermap APIs",
      url: "https://stewdiostash.github.io/hw-06-weather-dashboard/",
      github: "https://github.com/stewdiostash/hw-06-weather-dashboard",
    },
    {
      id: 3,
      title: "Burger Buddy",
      thumbnail: burger_thumb,
      summary: "Keeping a persistent tally of cullinary conquests with MySQL",
      url: "https://burger-buddy-app.herokuapp.com/",
      github: "https://github.com/stewdiostash/Burger-Buddy",
    },
    {
      id: 4,
      title: "Play'tSafe",
      thumbnail: playtsafe_thumb,
      summary: "Time-saving app that proposes creative movie and dinner combos",
      url: "https://stewdiostash.github.io/PlaytSafe/",
      github: "https://github.com/stewdiostash/PlaytSafe",
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
