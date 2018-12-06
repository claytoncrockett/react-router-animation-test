import React from "react";
import { Link } from "react-router-dom";

class Page extends React.Component {
  render() {
    return (
      <div>
        <h1>TEST</h1>
        <Link to="/">
          <h1>Click me again for diff animation</h1>
        </Link>
      </div>
    );
  }
}

export default Page;
