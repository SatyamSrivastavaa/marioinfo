import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component{
    render(){
        var projects = this.props.projects;
        // similar to above, also  called destructuring
        // var { projects } = this.props;

        return (
            <div className="dashboard comtainer">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={ projects } />
                    </div>
                    <div className="col s12 m5 offset-1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(Dashboard);