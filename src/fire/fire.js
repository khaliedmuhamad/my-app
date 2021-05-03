import React from 'react';
import firebase from ''

export const fire = () => {
    var data = { FirstName: 'Ehab', LastName: 'Kahwati', Age:23 };
var UserID = 225422;
var MyPath = firebase.database().ref('Users/'+ UserID);
MyPath.set(data)
  .then(function() {
    console.log('succeeded');
  })
  .catch(function(error) {
    console.log("failed: " + error.message);
  });
    return (
        <div>
            
        </div>
    )
}

