/*jshint node:true*/
var trim = function (number) {
  var ns = number.toString();
  var decimal = ns.indexOf('.');
  if (decimal > -1) {
    number = Array.prototype.slice.call(ns, 0, decimal + 3).join('');
  }
  return Number(number);
};

module.exports = function (req, res) {

  var transactions = [];
  var account_id = Number(req.query.account_id);

  for (var i = 0; i < 100; i++) {
    transactions.push({
      id: (account_id * 10000) + i + 1,
      date: new Date(Date.now() - i * 5000),
      description: "test transaction " + i.toString(),
      amount: trim((i + 1) * 4.21),
      account: account_id
    });
  }

  res.send({ transactions: transactions });

};
