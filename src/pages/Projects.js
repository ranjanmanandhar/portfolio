import React from 'react'
import ProjectItem from '../components/ProjectItem';
import { ProjectList } from '../helpers/ProjectList';
import { useNavigate } from 'react-router-dom';

import '../styles/Projects.css';

function Projects() {
  return (
    <div className='projects'>
        <h1>My Personal Project</h1>
        <div className='projectList' >
           {ProjectList.map((project, idx) => {
                return <ProjectItem id={idx} name={project.name} image={project.image} />;
           })};

        </div>
    </div>
  )
}

export default Projects