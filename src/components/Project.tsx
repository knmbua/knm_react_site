interface ProjectProps {
  title: string;
  description: string;
  backgroundImage: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, backgroundImage }) => {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, padding: '20px', margin: '10px', border: '1px solid #ccc', color:'white' }}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Project;