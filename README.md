# ABM React - Heroku

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

Develop a web application that meets the requirements placed in the Home section and they are also detailed in the README requirements section.

### Instructions

Steps to follow to be able to test the project on your pc.

1. Open shell

```
Shell in Visual Studio Code
```

2. npm install

```
We install the necessary packages to be able to run the system with "npm install"
```

3. npm start

```
We start the server with the command "npm start"
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Work and distribution team

```
- De Castro Gonzalo branch (products)
- Delmonte Lucas branch (providers)
```
### Requirements

- It must be developed with React using the create-react-app CLI.
- Have a list of resources following the logic of an ABM.
- It must have a library for managing forms. (final-form hint)
- It must have a layout, which must contain:
  - Header
  - NavBar
  - Body
  - Footer
- Must have more than one navigable route.
- The app must have AT LEAST two screens.
  - Home: This must have the names of the members and the name of the
              app. It is basically to be able to test the routing of the
              application.
  - Resource: on this screen they should show the list of resources
              with the logic of the AMB (if they work alone, they should only
              have home and that of the resource worked) to to be able to show
              the navigation within the app.
- It should have components for both the Header, Body and Footer, as
          well as a component for the table. In turn, these components must use
          components shared, such as: buttons, inputs, modal etc. These
          components must count with your .css files, preferably using CSS
          modules.
- You must have forms when making a POST, a DELETE or an UPDATE from a
          new resource to the list.
- You must have modals when you request to add, remove, or modify a
          resource to the ready. Within the modals, the form and / or the
          message of confirmation of deletion or update of a resource.
- Each form must have the corresponding validations to avoid adding new resources with bad data or no data.
- It must be possible to make the different requests (GET, POST, PUT, DELETE) from the ABM of each resource.
- You must have a file where the initial configuration of the Redux store is done.
- It must have a reducer for each resource and a rootReducer.
- You must have an actions file for each resource.
- You must have a file of types (constants) for the actions.
- You must have the use of action creators using the Redux Thunk
          library, which they are necessary to make the connection of the FE
          with the BE. For this, they must use the API already done for the
          first partial.
- The server project must be uploaded to a Github repository on behalf
          of the student (or one of the students in the group).
- You must have a readme with the steps to follow in order to correctly
          execute the application, repository URL and student name.
- The repository must contain verbose code, segmented into commits.
- In case of working in a group, all members must have commits to their
          name, otherwise it will not be possible to consider that this student
          has worked in the draft.       
