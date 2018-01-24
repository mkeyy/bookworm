import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import SignupForm from '../forms/SignupForm';
import { signup } from '../../actions/users';
import TopBar from '../navigation/TopBar';

class SignupPage extends React.Component {
  submit = data =>
    this.props.signup(data).then(() => this.props.history.push('/dashboard'));

  render() {
    return (
      <Segment vertical padded>
        <TopBar page="Signup Page" />

        <SignupForm submit={this.submit} />
      </Segment>
    );
  }
}

SignupPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  signup: PropTypes.func.isRequired,
};

export default connect(null, { signup })(SignupPage);
