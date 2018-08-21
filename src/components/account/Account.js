import React, { Component } from "react";
import Card from "../layout/Card";

class Account extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <Card
            link={"/transaction"}
            title={"Account Balance"}
            subtitle={"20,000 MYR"}
            body={"Click the card to see your transactions"}
          />
        </div>
        <div className="col">
          <Card
            link={"/cards"}
            title={"Cards"}
            subtitle={"5000 MYR"}
            body={"Click the card to see your transactions"}
          />
        </div>
        <div className="col">
          <Card
            link={"/fds"}
            title={"Fixed Deposits"}
            subtitle={"100,000 MYR"}
            body={"Click the card to see your transactions"}
          />
        </div>
      </div>
    );
  }
}

export default Account;
