import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker'
import { createRoot } from 'react-dom/client';
import { UP_Collection_Access }
        from './../imports/api/user_posts.js';
import App from './../imports/ui/App.js';
import Instructions from './../imports/ui/Instructions.js';

Meteor.subscribe("user_posts_collection");

Meteor.startup(() =>  {
  const root = createRoot(document.getElementById('react-target'));
  Tracker.autorun(() => {

    let allPostsInDB = UP_Collection_Access.find({}, {sort: {votes: -1}}).fetch();
    let title = 'CSCI 441 Final Exam Study Project';

    root.render(
      <>
        
        <App
          passedPropTitle={title}
          passedPropModerator={'Hopper'}
          passedPropAllPosts={allPostsInDB}
        />
        <hr />
        <Instructions/>
      </>,
    );
  });
});