
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => {
    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to sign in
        <Route {...rest} render={props => (
            loggedIn ?
                <Component {...props} />
                : <Redirect to="/login" />
        )} />
    );
};

const mapStateToProps = (state) => ({
    loggedIn: state.authReducer.loggedIn,
});

export default connect(mapStateToProps)(PrivateRoute);