// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import "./TabConfig.css"
import logo from "../icon.png"
import React from 'react';
import '../App.css';
import * as microsoftTeams from "@microsoft/teams-js";
import CreateDepartment from '../Pages/CreateDepartment'
import { Link } from 'react-router-dom'


/**
 * The 'Config' component is used to display your group tabs
 * user configuration options.  Here you will allow the user to 
 * make their choices and once they are done you will need to validate
 * their choices and communicate that to Teams to enable the save button.
 */
class TabConfig extends React.Component {

    render() {
      /**
       * When the user clicks "Save", save the url for your configured tab.
       * This allows for the addition of query string parameters based on
       * the settings selected by the user.
       */
      microsoftTeams.settings.registerOnSaveHandler((saveEvent) => {

        const baseUrl = `https://${window.location.hostname}:${window.location.port}`;
        microsoftTeams.settings.setSettings({
          "suggestedDisplayName": "Water Cooler",
          "entityId": "Test",
          "contentUrl": baseUrl + "/tab",
          "websiteUrl": baseUrl + "/tab"
        });
        saveEvent.notifySuccess();
       });
  
      /**
       * After verifying that the settings for your tab are correctly
       * filled in by the user you need to set the state of the dialog
       * to be valid.  This will enable the save button in the configuration
       * dialog.
       */
      microsoftTeams.settings.setValidityState(true);
  
      return (
        <div align="center">
          <h1>Welcome to Water Cooler!</h1>
          <img src={logo} alt="Water Cooler Logo"/>
          <div className="container">
            <p>Water Cooler's goal is to make geographically distributed teams feel more connected. At a quick glimpse, members of an organization can look at the Water Cooler app and see everyone in their organization, the departments/groups they belong to, and a customizable description of someone. It allows members to connect a name to a person very quickly and learn about them, all in a single app!</p>           
            <p>Start by clicking the "Create Department" button below and creating your first group/department! This app automatically creates a list using this current team's roster. When you're finished, click the "Homepage" button. If you ever need to add/delete/update your departments, you can do so by logging into the admin page. <br /> (first time admin login credentials [username:root pass:Hack.Diversity])</p>
            <CreateDepartment />
            <Link to="/" className="home-button">Homepage</Link>
          </div>
        </div>
      );
    }
  }

  export default TabConfig;