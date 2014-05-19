export default Ember.ArrayController.extend({
  itemController: 'Accounts/TransactionItem',
  currentEditingItem: null,
  actions: {

    startEditing: function (item) {
      var currentItem = this.get('currentEditingItem');
      if (currentItem !== item) {
        if (currentItem) { currentItem.set('isEditing', false); }
        item.set('isEditing', true);
        this.set('currentEditingItem', item);
      }
    },

    stopEditing: function () {
      var currentItem = this.get('currentEditingItem');
      currentItem.set('isEditing', false);
      if (currentItem.get('isDirty')) {
        currentItem.get('content').save();
      }
      this.set('currentEditingItem', null);
    }

  }
});
