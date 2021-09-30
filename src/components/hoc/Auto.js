import React from "react";
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


const Athorization = (WrappedComponent) => {
    class WithAuthorization extends React.Component {
      static propTypes = {
        isAuth: PropTypes.bool
      };
  
      render() {
        const { isAuth } = this.props;
  
        if (!isAuth) {
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