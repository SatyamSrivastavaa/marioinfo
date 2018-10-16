import React from 'react';
import ProjectSummmary from './ProjectSummary';

//below is similar to this.props.projects. Here instead of using props in the argument we just destructured
const ProjectList = ({projects}) => {
    return (
        <div className="projectList section">
            {
                projects && projects.map(project => {
                    return (
                        <ProjectSummmary project={project} key={project.id} />
                    )
                })
            }
        </div>
    )
}

export default ProjectList;