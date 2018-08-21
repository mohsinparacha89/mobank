import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Header = props => {
  const { branding } = props;
  return <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>

        <div>
          <ul className="navbar-nav mr-auto" />
        </div>
      </div>
    </nav>;
};

Header.defaultProps = {
  branding: "Mo Bank"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};
export default Header;
