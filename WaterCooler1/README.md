# Water Cooler: An App for Microsoft Teams
Link to promo video: https://youtu.be/08ppX3KiYl8

Link to presentation with the story of how Water Cooler came to be and a live demo: https://youtu.be/2PkPKkjQjnY
 
Water Cooler's goal is to make geographically distributed teams feel more connected. At a quick glimpse, members of an organization can look at the Water Cooler app and see       everyone in their organization, the departments/groups they belong to, and a customizable description of someone. It allows members to connect a name to a person very quickly and learn about them, all in a single app!

Water Cooler is built on the MERN stack: the back end is located in /WaterCooler1/server and the front end is located in /WaterCooler1/src

## Prerequisites
-  [NodeJS](https://nodejs.org/en/)

-  [M365 developer account](https://docs.microsoft.com/en-us/microsoftteams/platform/concepts/build-and-test/prepare-your-o365-tenant) or access to a Teams account with the appropriate permissions to install an app.

## Getting Started
After cloning this repo, head over to the server directory and in your terminal execute:

`npm install`

`npm start`

Your back end will hosted on "localhost:5000" by default

Then, using another terminal, head over to the src directory and execute: 

`npm install`

`npm start`

Your front end will hosted on "localhost:3000" by default. Until you deploy your app, you MUST run the back and front end at the same time.

You will also probably want to create your own MongoDB (or other database) cluster and specify the connection string in the /server/db/index.js file. However, feel free to use the one currently there now to get you started!

### NOTE: First time debug step
On the first time running and debugging your app you need allow the localhost certificate.  After starting debugging when Chrome is launched and you have installed your app it will fail to load.

- Open a new tab `in the same browser window that was opened`
- Navigate to `https://localhost:3000/tab`
- Click the `Advanced` button
- Select the `Continue to localhost`

## Deploy to Teams
Start debugging the project by hitting the `F5` key or click the debug icon in Visual Studio Code and click the `Start Debugging` green arrow button.


## Additional resources
[How to create your first MERN (MongoDB, Express JS, React JS and Node JS) Stack](https://medium.com/swlh/how-to-create-your-first-mern-mongodb-express-js-react-js-and-node-js-stack-7e8b20463e66)

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
