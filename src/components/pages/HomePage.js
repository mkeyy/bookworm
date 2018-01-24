import React from 'react';
import PropTypes from 'prop-types';
import { Header, Button, Icon, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';

const HomePage = ({ isAuthenticated, logout }) => {
  return (
    <Container className="full height">
      <Header as="div" icon textAlign="center">
        <Icon name="book" size="massive" circular />
        <Header.Content>
          <h2>Bookworm</h2>
        </Header.Content>

        <Header.Subheader as="h4">
          {isAuthenticated ? (
            <div>
              <Button color="blue" as={Link} to="/dashboard">
                Dashboard
              </Button>
              <Button color="blue" onClick={() => logout()}>
                Logout
              </Button>
            </div>
          ) : (
            <div>
              <Link to="/login">Login</Link> or{' '}
              <Link to="/signup">Sign up</Link>
            </div>
          )}
        </Header.Subheader>
      </Header>
    </Container>
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
