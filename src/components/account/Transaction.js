import React, { Component } from "react";
import PropTypes from "prop-types";
class Transaction extends Component {
  render() {
      const { id, date, amount, description } = this.props.t;

    return (
      <div >
             {date} {amount} {description}
      </div>
    );
  }
}

Transaction.propTypes = {
  t: PropTypes.object.isRequired,
};

export default Transaction;