import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(date) {
  return date.toDateString();
});
