import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    var account = this.modelFor('account');
    return this.store.find('transaction', { account_id: account.id });
  }
});
