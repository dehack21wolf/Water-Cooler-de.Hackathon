// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import React from 'react';
import './App.css';
import * as microsoftTeams from "@microsoft/teams-js";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Privacy from "./components/Privacy";
import TermsOfUse from "./components/TermsOfUse";
import Tab from "./components/Tab";
import TabConfig from "./components/TabConfig";
import HomePage from "./Pages/HomePage"
import AdminPage from "./Pages/AdminPage"

/**
 * The main app which handles the initialization and routing
 * of the app.
 */
function App() {

  // Initialize the Microsoft Teams SDK
  microsoftTeams.initialize();

  // Display the app home page hosted in Teams
  return (
    <Router>
      <Route exact path="/privacy" component={Privacy} />
      <Route exact path="/termsofuse" component={TermsOfUse} />
      <Route exact path="/tab" component={Tab} />
      <Route exact path="/config" component={TabConfig} />
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/admin" component={AdminPage}/>
    </Router>
  );
}

export default App;
