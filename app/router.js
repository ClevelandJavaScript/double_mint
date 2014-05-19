import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('accounts', function () {
    this.resource('account', { path: ':account_id' }, function () {
    });
  });
});

export default Router;
