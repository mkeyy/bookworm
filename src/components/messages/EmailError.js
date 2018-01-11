import React from "react";
import PropTypes from "prop-types";

const EmailError = ({ text }) => (
    <span style={{ color: "#ae5856" }}>{text}</span>
);

EmailError.propTypes = {
    text: PropTypes.string.isRequired
};

export default EmailError;