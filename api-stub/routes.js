/*jshint node:true*/
module.exports = function(server) {

  // Create an API namespace, so that the root does not
  // have to be repeated for each end point.
	server.namespace('/api', function() {

    server.get('/transactions', require('./transactions'));
    server.get('/accounts', require('./accounts'));

  });

};
