export default Ember.Handlebars.makeBoundHelper(function(number) {
  var ns = number.toString();
  var result;
  var decimal = ns.indexOf('.');
  if (decimal > -1) {
    if (decimal+2 <= ns.length) { ns = ns + '0'; }
    result = Array.prototype.slice.call(ns, 0, decimal + 3).join('');
  } else {
    result = ns + ".00";
  }
  return "$" + result;
});
