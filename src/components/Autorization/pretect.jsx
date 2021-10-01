import React from 'react';
import { Redirect } from 'react-router';
const protect = (WrappedComponent) => {
    const WithAuthorization= (props)=> {
        const isAuth = props.isAuth;
        if (!isAuth) {
            return <Redirect to='/' />;
          }


          return <WrappedComponent {...props}/>;
    }
}

const mapStateToProps = (state) => (
    {
      isAuthorized: Boolean(state.username)
    }
  );

  return connect(mapStateToProps)(WithAuthorization);