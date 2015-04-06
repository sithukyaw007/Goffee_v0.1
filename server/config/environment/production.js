'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:       process.env.OPENSHIFT_NODEJS_IP ||
            process.env.IP ||
            undefined,

  // Server port
  port:     process.env.OPENSHIFT_NODEJS_PORT ||
            process.env.PORT ||
            8080,

  // MongoDB connection options
  mongo: {
    uri:    process.env.MONGOLAB_URI ||
            process.env.MONGOHQ_URL ||
            process.env.OPENSHIFT_MONGODB_DB_URL+process.env.OPENSHIFT_APP_NAME ||
            'mongodb://localhost/goffeeapp'
  }
  // ,
  //   facebook: {
  //   clientID:     '1586786374871781',
  //   clientSecret: '695a838a372bd91a4bfa1f8507d4c6a1',
  //   callbackURL:  'http://goffeeapp.herokuapp.com/auth/facebook/callback'
  // }
};