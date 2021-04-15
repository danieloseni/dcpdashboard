import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import { isLoggedIn } from '../redux/helpers/util';

const PublicRoute = ({ component: Component, loggedIn, restricted, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            loggedIn && restricted ?
                <Redirect to="/dashboard" />
                : <Component {...props} />
        )} />
    );
};

const mapStateToProps = (state) => ({
    loggedIn: state.authReducer.loggedIn,
});

export default connect(mapStateToProps)(PublicRoute);