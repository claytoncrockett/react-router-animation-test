import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import Home from "./Home";
import Page from "./Page";
import SwitchWithSlide from "./SwitchWithSlide";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Fragment>
          <div className="container">
            <SwitchWithSlide>
              <Route exact path="/" component={Home} />
              <Route exact path="/page" component={Page} />
            </SwitchWithSlide>
          </div>
        </React.Fragment>
      </HashRouter>
    );
  }
}

export default App;
