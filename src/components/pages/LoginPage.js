import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginForm from '../forms/LoginForm';
import { login } from '../../actions/auth';
import TopBar from "../navigation/TopBar";

class LoginPage extends React.Component {
  submit = data =>
    this.props.login(data).then(() => this.props.history.push('/dashboard'));

  render() {
    return (
      <Segment vertical padded>
        <TopBar page="Login Page"/>

        <LoginForm submit={this.submit} />

        <Link to="/forgot_password">Forgot Password?</Link>
      </Segment>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  login: PropTypes.func.isRequired,
};

export default connect(null, { login })(LoginPage);
