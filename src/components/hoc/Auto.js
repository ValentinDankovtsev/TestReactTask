import React from "react";
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logIn } from "../services/logIn";

const Athorization = (WrappedComponent) => {
  
    class WithAuthorization extends React.Component {
      
      render() {
        const { isAuth } = this.props;
        const  userName  = this.props;
        console.log(isAuth)
        console.log(userName)
        if (isAuth) {
          return <Redirect to='/' />;
        }
        return <WrappedComponent {...this.props}/>;
      }
    }
  
    const mapStateToProps = (state) => (
      {
        isAuth: Boolean(state.userName)
      }
    );
  
    return connect(mapStateToProps)(WithAuthorization);
  };
  
  export default Athorization;