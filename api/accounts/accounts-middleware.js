const Account = require('../accounts/accounts-model');

function checkAccountPayload(req, res, next) {
  // DO YOUR MAGIC
  const { name, budget } = req.body;
  if(name === null || budget === null ) {
    res.status(400).json({ message: "name and budget are required" })
  } else if (typeof name !== "string") { 
    res.status(400).json({ message: "name of account must be a string" })
  } else if (name.length < 3 || name.length > 100) {
    res.status(400).json({ message: "name of account must be between 3 and 100" })
  } else if (isNaN(budget) || typeof budget !== "number") {
    res.status(400).json({ message: "budget of account must be a number" })
  } else if (budget < 0 || budget > 1000000) {
    res.status(400).json({ message: "budget of account is too large or too small" })
  } else {
    next()
  }
}

async function checkAccountNameUnique(req, res, next) {
  // DO YOUR MAGIC
  const accountName = req.params.name;
  const account = await Account.getUniqueName(accountName)
  if (account) {
    res.status(400).json({ message: "that name is taken" })
  } else {
    req.account = account
    next()
  }
}

async function checkAccountId(req, res, next) {
  // DO YOUR MAGIC
  const accountID = req.params.id;
  const account = await Account.getById(accountID)
  if (account) {
    req.account = account
    next()
  } else {
    res.status(404).json({ message: "account not found"})
  }
}

module.exports = {
  checkAccountPayload,
  checkAccountNameUnique,
  checkAccountId
}