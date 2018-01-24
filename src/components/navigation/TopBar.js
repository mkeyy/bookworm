import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const TopBar = ({ page }) => (
  <Menu secondary pointing>
    <Menu.Item>
      <h1>{page}</h1>
    </Menu.Item>
    <Menu.Item position="right" as={Link} to="/">
      <p>Home</p>
    </Menu.Item>
  </Menu>
);

TopBar.propTypes = {
  page: PropTypes.string.isRequired,
};

export default TopBar;
