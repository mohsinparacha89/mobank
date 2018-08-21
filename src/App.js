import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Account from "./components/account/Account";
import Transcation from "./components/account/Transactions";
import BankCard from "./components/account/BankCard";
import FixedDeposit from "./components/account/FixedDeposit";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <div className="container">
              <Account />
              <hr/>
              <Switch>
                <Route exact path="/transaction" component={Transcation} />
                <Route exact path="/cards" component={BankCard} />
                <Route exact path="/fds" component={FixedDeposit} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
