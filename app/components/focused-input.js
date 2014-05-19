export default Ember.TextField.extend({
  setFocus: function () {
    this.$().focus();
  }.on('didInsertElement')
});
