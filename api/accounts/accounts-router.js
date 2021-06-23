const router = require('express').Router()
const Account = require('./accounts-model')
const {checkAccountPayload, checkAccountNameUnique, checkAccountId} = require('./accounts-middleware')

router.get('/', async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const account = await Account.getAll()
    res.json(account)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', checkAccountId, async (req, res) => {
  // DO YOUR MAGIC
  res.status(200).json(req.post)
})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
})

module.exports = router;
