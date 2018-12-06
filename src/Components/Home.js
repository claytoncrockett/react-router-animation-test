import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

class Home extends React.Component {
  render() {
    return (
      <div class="backgroundone">
        <Link to="/page">
          <button class="pageswap">CLICK ME</button>
        </Link>
      </div>
    );
  }
}

export default Home;
