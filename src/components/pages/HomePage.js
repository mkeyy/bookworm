import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';

const HomePage = ({ isAuthenticated, logout }) => {
  return (
    <div>
      <h1>Home Page</h1>
      {isAuthenticated ? (
        <button onClick={() => logout()}>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token,
  };
}

export default connect(mapStateToProps, { logout: actions.logout })(HomePage);
