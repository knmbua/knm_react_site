import Project from './Project';

const projects = [
  {
    title: 'Weather App',
    description: 'Amazing weather application made with Typescript, Node JS and Vite',
    backgroundImage: '/work_bg.jpg'
  },
  {
    title: 'Employee Tracker',
    description: 'Intense terminal app made with Node, Postgres, Typescript, and Inquirer',
    backgroundImage: '/work_bg.jpg'
  },
  {
    title: 'Vehicle Builder',
    description: 'Cool terminal app that lets your track and create vehicle data. It was made with Node, Typescript and Inquirer',
    backgroundImage: '/work_bg.jpg'
  },
  {
    title: 'Readme Generator',
    description: 'Intense terminal app made with Node, Postgres, Typescript, and Inquirer',
    backgroundImage: '/work_bg.jpg'
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
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;