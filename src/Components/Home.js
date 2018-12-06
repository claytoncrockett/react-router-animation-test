import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

class Home extends React.Component {
  render() {
    return (
      <div class="backgroundone">
        <p>hello</p>
        <Link to="/page">
          <h1>Click me for animation</h1>
        </Link>
      </div>
    );
  }
}

export default Home;
