import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
class Card extends Component {
  render() {
    const { link, title, subtitle, body } = this.props;

    return (
      <Link to={link} className="nav-link">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
            <p className="card-text">{body}</p>
          </div>
        </div>
      </Link>
    );
  }
}

Card.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default Card;
