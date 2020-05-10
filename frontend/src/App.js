import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import MyLog from "./pages/MyLog";
import CommunityLog from "./pages/CommunityLog";
import Layout from "./layout/Layout";
import Navigationbar from "./layout/Navigationbar";

import {Provider} from 'redact-redux';

function App() {
  
  return (
    <React.Fragment>
      <Navigationbar />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/my-log" component={MyLog} />
            <Route path="/community-log" component={CommunityLog} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
