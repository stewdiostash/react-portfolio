import React from "react";
import Header from "../components/Header";
import ProjectGrid from "../components/ProjectGrid";

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "Bandwich",
      thumbnail: "images/bandwich.png",
      summary:
        "A simple 4-track recording interface designed with collaboration in mind",
      url: "https://bandwich-app.herokuapp.com/",
      github: "https://github.com/stewdiostash/bandwich",
    },
    {
      id: 2,
      title: "Weather Dashboard",
      thumbnail: "images/forecast.png",
      summary:
        " Responsive weather dashboard linked to multiple Openweathermap APIs",
      url: "https://stewdiostash.github.io/hw-06-weather-dashboard/",
      github: "https://github.com/stewdiostash/hw-06-weather-dashboard",
    },
    {
      id: 3,
      title: "Burger Buddy",
      thumbnail: "images/burgerbuddy.png",
      summary: "Keeping a persistent tally of cullinary conquests with MySQL",
      url: "https://burger-buddy-app.herokuapp.com/",
      github: "https://github.com/stewdiostash/Burger-Buddy",
    },
    {
      id: 4,
      title: "Play'tSafe",
      thumbnail: "images/playtsafe.png",
      summary: "Time-saving app that proposes creative movie and dinner combos",
      url: "https://stewdiostash.github.io/PlaytSafe/",
      github: "https://github.com/stewdiostash/PlaytSafe",
    },
  ];
  return (
    <main>
      <Header />
      <ProjectGrid projects={projects} />
    </main>
  );
};

export default Work;
