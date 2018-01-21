import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import EmailError from '../messages/EmailError';

class ResetPasswordForm extends React.Component {
  state = {
    data: {
      token: this.props.token,
      password: '',
      passwordConfirmation: '',
    },
    loading: false,
    errors: {},
  };

  onChange = e => {
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false }),
        );
    }
  };

  validate = data => {
    const errors = {};
    if (!data.password) errors.password = "Can't be blank";
    if (data.password !== data.passwordConfirmation)
      errors.password = 'Passwords must match';
    return errors;
  };

  render() {
    const { errors, data, loading } = this.state;

    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
        <h2>Reset Password</h2>
        <Form.Field error={!!errors.email}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="your new password"
            value={data.password}
            onChange={this.onChange}
          />
          {errors.password && <EmailError text={errors.password} />}
        </Form.Field>
        <Form.Field error={!!errors.email}>
          <label htmlFor="passwordConfirmation">Repeat Password</label>
          <input
            type="password"
            id="passwordConfirmation"
            name="passwordConfirmation"
            placeholder="type it again"
            value={data.passwordConfirmation}
            onChange={this.onChange}
          />
          {errors.passwordConfirmation && (
            <EmailError text={errors.passwordConfirmation} />
          )}
        </Form.Field>
        <Button primary>Reset</Button>
      </Form>
    );
  }
}

ResetPasswordForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default ResetPasswordForm;
