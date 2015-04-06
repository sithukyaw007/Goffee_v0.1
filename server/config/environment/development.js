'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/goffeeapp-dev'
  }
 //  ,
 // facebook: {
 //    clientID:     '1586786374871781',
 //    clientSecret: '695a838a372bd91a4bfa1f8507d4c6a1',
 //    callbackURL:  'http://localhost:9000/auth/facebook/callback'
 //  }
  ,
  seedDB: true
};
