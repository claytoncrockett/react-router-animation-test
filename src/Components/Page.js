import React from "react";
import { Link } from "react-router-dom";

class Page extends React.Component {
  render() {
    return (
      <div class="backgroundtwo">
        <Link to="/">
          <button class="pageswap">CLICK ME</button>
        </Link>
      </div>
    );
  }
}

export default Page;
