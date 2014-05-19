export default DS.Model.extend({
  name: DS.attr('string'),
  account_type: DS.attr('string'),
  balance: DS.attr('number'),
  transactions: DS.hasMany('transaction')
});
