import React from 'react';

const Home = () => {
  return (
    <>
      <h2>Welcome to the ABM made in React</h2>
      <p>
        In this section you will find the instructions to carry out with the
        points to complete to approve the partial.
      </p>
      <h3>Web application requirements</h3>
      <ul>
        <li>It must be developed with React using the create-react-app CLI.</li>
        <li>Have a list of resources following the logic of an ABM.</li>
        <li>It must have a library for managing forms. (final-form hint)</li>
        <li>
          It must have a layout, which must contain:
          <ul>
            <li>Header</li>
            <li>NavBar </li>
            <li>Body</li>
            <li>Footer</li>
          </ul>
        </li>
        <li>Must have more than one navigable route.</li>
        <li>
          The app must have AT LEAST two screens.
          <ul>
            <li>
              Home: This must have the names of the members and the name of the
              app. It is basically to be able to test the routing of the
              application.
            </li>
            <li>
              Resource: on this screen they should show the list of resources
              with the logic of the AMB (if they work alone, they should only
              have home and that of the resource worked) to to be able to show
              the navigation within the app.
            </li>
          </ul>
        </li>
        <li>
          It should have components for both the Header, Body and Footer, as
          well as a component for the table. In turn, these components must use
          components shared, such as: buttons, inputs, modal etc. These
          components must count with your .css files, preferably using CSS
          modules.
        </li>
        <li>
          You must have forms when making a POST, a DELETE or an UPDATE from a
          new resource to the list.
        </li>
        <li>
          You must have modals when you request to add, remove, or modify a
          resource to the ready. Within the modals, the form and / or the
          message of confirmation of deletion or update of a resource.
        </li>
        <li>
          Each form must have the corresponding validations to avoid adding new
          resources with bad data or no data.
        </li>
        <li>
          It must be possible to make the different requests (GET, POST, PUT,
          DELETE) from the ABM of each resource.
        </li>
        <li>
          You must have a file where the initial configuration of the Redux
          store is done.
        </li>
        <li>It must have a reducer for each resource and a rootReducer.</li>
        <li>You must have an actions file for each resource.</li>
        <li>You must have a file of types (constants) for the actions.</li>
        <li>
          You must have the use of action creators using the Redux Thunk
          library, which they are necessary to make the connection of the FE
          with the BE. For this, they must use the API already done for the
          first partial.
        </li>
        <li>
          The server project must be uploaded to a Github repository on behalf
          of the student (or one of the students in the group).
        </li>
        <li>
          You must have a readme with the steps to follow in order to correctly
          execute the application, repository URL and student name.
        </li>
        <li>
          The repository must contain verbose code, segmented into commits.
        </li>
        <li>
          In case of working in a group, all members must have commits to their
          name, otherwise it will not be possible to consider that this student
          has worked in the draft.
        </li>
      </ul>
    </>
  );
};

export default Home;
