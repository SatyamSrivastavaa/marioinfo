import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../store/actions/authActions';

const SignedInLinks = (props) => {
    const { userProfile } = props;
    return (
        <ul className="right">
            <li><NavLink to="/create">New Project</NavLink></li>
            <li><a onClick={props.signOut}>Logout</a></li>
            <li><NavLink to="/" className="btn btn-floating lighten-1">{ userProfile.initials }</NavLink></li>
        </ul>
    )
}

const mapStateTOProps = (state) => {
    return {
        userProfile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateTOProps, mapDispatchToProps)(SignedInLinks);