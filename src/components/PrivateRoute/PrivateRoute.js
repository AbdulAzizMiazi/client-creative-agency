import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { userContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [userInfo] = useContext(userContext);
    return (
        <Route
        {...rest}
        render={({ location }) =>
            userInfo.isAuthorizedUser ? (
            children
            ) : (
            <Redirect
                to={{
                pathname: "/login",
                state: { from: location }
                }}
            />
            )
        }
        />
    );
};

export default PrivateRoute;