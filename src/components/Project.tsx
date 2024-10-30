import React from 'react';

interface ProjectProps {
  title: string;
  description: string;
  backgroundImage: string;
  repoLink: string
}

const Project: React.FC<ProjectProps> = ({ title, description, backgroundImage, repoLink }) => {
  const projectStyle = {
    backgroundImage: `url(${backgroundImage})`,
    padding: '20px',
    margin: '10px',
    color: 'white', 
    backgroundSize: 'cover',
    backgroundPosition: 'center'
   
  };

  return (
    <div style={projectStyle}>
      <h2>{title}</h2>
      <p>{description}</p>
     <a> Deployed Project in Terminal App </a>
      <br />
      <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
    </div>
  );
};

export default Project;