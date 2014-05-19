export default DS.Model.extend({
  date: DS.attr('date'),
  description: DS.attr('string'),
  amount: DS.attr('number'),
  account: DS.belongsTo('account')
});
