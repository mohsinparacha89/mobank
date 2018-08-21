import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTransactions } from "../../redux/actions/transactionActions";
import Transaction from "./Transaction";

class Transactions extends Component {
  componentDidMount() {
    this.props.getTransactions();
  }

  render() {
    const { transactions } = this.props;
    return <React.Fragment>
      <h1 className="display-4 mb-2">
        <span className="text-Primary">Transaction</span> List
        </h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(t => (
          <tr key={t.id}> 
              <td>{t.id}</td>
              <td>{t.date}</td>
              <td>{t.amount}</td>
              <td>{t.description}</td>

          </tr>
           
          ))}
          
        </tbody>
      </table>

    </React.Fragment>;
  }
}
const mapStateToProps = state => ({
  transactions: state.transaction.transactions
});

export default connect(
  mapStateToProps,
  { getTransactions }
)(Transactions);
