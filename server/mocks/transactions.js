module.exports = function(app) {
  var express = require('express');
  var transactionsRouter = express.Router();

  transactionsRouter.get('/', function(req, res) {
    var transactions = [];
    var account_id = Number(req.query.account_id);

    for (var i = 0; i < 100; i++) {
      transactions.push({
        id: (account_id * 10000) + i + 1,
        date: new Date(Date.now() - i * 5000),
        description: "test transaction " + i.toString(),
        amount: ((i + 1) * 4.21).toFixed(2),
        account: account_id
      });
    }

    res.send({ transactions: transactions });
  });

  transactionsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  transactionsRouter.get('/:id', function(req, res) {
    res.send({
      "transactions": {
        "id": req.params.id
      }
    });
  });

  transactionsRouter.put('/:id', function(req, res) {
    res.send({
      "transactions": {
        "id": req.params.id
      }
    });
  });

  transactionsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/transactions', transactionsRouter);
};
