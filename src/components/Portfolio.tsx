import React from 'react';
import Project from './Project';

const projects = [
  {
    title: 'Employee Tracker',
    description: 'Terminal app made with Node, Postgres, Typescript, and Inquirer',
    backgroundImage: '/work_bg.jpg',
    repoLink: 'https://github.com/knmbua/employee_database_tracker',
    
  },
  {
    title: 'Vehicle Builder',
    description: 'Terminal app that lets your track and create vehicle data. It was made with Node, Typescript and Inquirer',
    backgroundImage: '/work_bg.jpg',
    repoLink: 'https://github.com/knmbua/vehicle_builder',
  },
  {
    title: 'Readme Generator',
    description: 'Terminal app made with Node, Postgres, Typescript, and Inquirer',
    backgroundImage: '/work_bg.jpg',
    repoLink: 'https://github.com/knmbua/README_generator',
  
  }
];

const Portfolio: React.FC = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <div>
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            backgroundImage={project.backgroundImage}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;