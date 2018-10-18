import React from 'react';
import ProjectSummmary from './ProjectSummary';
import { Link } from 'react-router-dom';

//below is similar to this.props.projects. Here instead of using props in the argument we just destructured
const ProjectList = ({ projects }) => {
    return (
        <div className="projectList section">
            {
                projects && projects.map(project => {
                    return (
                        <Link to={"/project/" + project.id} key={project.id}>
                            <ProjectSummmary project={project} />
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default ProjectList;