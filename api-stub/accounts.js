/*jshint node:true*/
var accounts = {
  "accounts": [{
    id: 1,
    name: "MegaBank Checking",
    account_type: "checking",
    balance: 5025.33,
    links: { "transactions": "transactions" }
  }, {
    id: 2,
    name: "MegaBank Savings",
    account_type: "savings",
    balance: 125.90,
    links: { "transactions": "transactions" }
  }, {
    id: 3,
    name: "Visa Card",
    account_type: "credit",
    balance: -592.48,
    links: { "transactions": "transactions" }
  }]
};

module.exports = function (req, res) {
  res.send(accounts);
};
