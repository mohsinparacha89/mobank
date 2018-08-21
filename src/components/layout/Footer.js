import React from "react";
import ReactDOM from "react-dom";

class Footer extends React.Component {
  render() {
      return <footer className="container py-5">
          Copyright {new Date().getFullYear()}
        </footer>;
  }
}

export default Footer;
