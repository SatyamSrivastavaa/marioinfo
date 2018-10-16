import React from 'react'

const ProjectDetails = (props) => {
  var id = props.match.params.id  
  return (
    <div className="cotainer section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
            <span className="card-title">Project Title - {id}</span>
            <p>Lorem nsjkbskj sbdjksdddnjks d hkd shuidh huk sd.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
            <div>Posted by Satyam Srivastava</div>
            <div>14th November, 2am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
