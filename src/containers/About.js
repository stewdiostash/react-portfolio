import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ProjectGrid from "../components/ProjectGrid";

const About = () => {
  const projects = [
    {
      id: 1,
      name: "Milk",
      purchased: true,
    },
    {
      id: 2,
      name: "Eggs",
      purchased: true,
    },
    {
      id: 3,
      name: "Cheese",
      purchased: false,
    },
    {
      id: 4,
      name: "Cake Mix",
      purchased: false,
    },
    {
      id: 5,
      name: "Carrots",
      purchased: false,
    },
    {
      id: 6,
      name: "Juice",
      purchased: true,
    },
  ];

  return (
    <div>
      <Navbar />
    </div>
  );
};

export default About;
