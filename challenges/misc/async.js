async function asyncJob(result, database, errorManager) {

  try {
      const id = await result;
      const info = await database.get(id);
      return info.name;

  } catch (err) {
      errorManager.notify(err);
      return Promise.reject(err);
  }
}

module.exports = asyncJob;