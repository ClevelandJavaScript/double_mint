var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.resource('accounts', function () {
    this.resource('account', { path: ':account_id' }, function () {
    });
  });
});

export default Router;
