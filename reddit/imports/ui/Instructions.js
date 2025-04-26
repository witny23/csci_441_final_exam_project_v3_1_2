import React from 'react';

export default class Instructions extends React.Component{ 
  render(){
    return (
    <>
      <h1>Instructions</h1>
      <p><strong>Goal:</strong> Convert class components, implement routes, authenticate users.</p>

      <h2>Overview:</h2>
      <ul>
        <li>
          <strong>Convert class components to functional components. Implement <code>useState()</code> as needed:</strong>
          <ul>
            <li>AddTopics</li>
            <li>App</li>
            <li>Instructions</li>
            <li>RenderPost</li>
            <li>TitleBar</li>
            <li>TopicList</li>
          </ul>
        </li>

        <li>
          <strong>Require users to login in order to view posts and post themselves:</strong>
          <ul>
            <li>Create <code>Login.js</code></li>
            <li>If users are logged in, redirect to posts page (App)</li>
            <li>Provide an error if login is incorrect</li>
            <li>Using <code>Link</code>, provide a link to signup</li>
          </ul>
        </li>

        <li>
          <strong>Provide a means to signup:</strong>
          <ul>
            <li>Create <code>Signup.js</code></li>
            <li>If users are logged in, redirect to posts page</li>
            <li>Provide an error if signup is incorrect</li>
            <li>Using <code>Link</code>, provide a link to login</li>
          </ul>
        </li>

        <li>
          <strong>Provide a means to logout as implemented on the posts page:</strong>
          <ul>
            <li>Create <code>Logout.js</code></li>
            <li>If users click on the logout button, they will end up at the login page</li>
          </ul>
        </li>

        <li>
          <strong>Implement routes (including a 404 page with a link to login):</strong>
          <ul>
            <li>Update <code>client/main.jsx</code> as needed</li>
          </ul>
        </li>

        <li>
          <strong>Create <code>RouteDecisions.js</code>:</strong>
          <ul>
            <li>Used to assess public and private component access</li>
            <li>Import and implement in <code>client/main.js</code> as needed</li>
            <li>
              <em>Note:</em> Private and public decisions must be made here 
              (Yes, an if/else can work elsewhere, but placing them outside would result in point loss if points were available).
            </li>
          </ul>
        </li>

        <li>
          <strong>Create <code>NotFound.js</code>:</strong>
          <ul>
            <li>Used when a URL is not found</li>
            <li>Using <code>Link</code>, create a link to the login page</li>
          </ul>
        </li>
      </ul>

    </>
    );
  }
};