module.exports = function(app) {
  var express = require('express');
  var accountsRouter = express.Router();

  accountsRouter.get('/', function(req, res) {
    res.send({
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
    });
  });

  accountsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  accountsRouter.get('/:id', function(req, res) {
    res.send({
      "accounts": {
        "id": req.params.id
      }
    });
  });

  accountsRouter.put('/:id', function(req, res) {
    res.send({
      "accounts": {
        "id": req.params.id
      }
    });
  });

  accountsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/accounts', accountsRouter);
};
