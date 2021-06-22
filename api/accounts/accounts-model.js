const db = require('../../data/db-config');

module.exports = {
  getAll,
  getById,
  getUniqueName,
  create,
  updateById,
  deleteById,
}


function getAll() {
  // DO YOUR MAGIC
  return db ('accounts');
}

function getById(id) {
  // DO YOUR MAGIC
  return db('accounts')
    .where({ id })
    .first();
}

function getUniqueName(name) {
  return db('accounts')
    .where({name})
    .first();
}

async function create({name,budget}){
  // DO YOUR MAGIC
  const [account] = await db("accounts").insert({name,budget})
  return getById(account)
}

async function updateById(id, {name, budget}) {
  // DO YOUR MAGIC
  await db("accounts").where("id", id).update({name, budget})
  return getById(id)
}

async function deleteById(id) {
  // DO YOUR MAGIC
  const deleteAccount = await getById(id)
  await db("accounts").where("id",id).delete()
  return deleteAccount
}
