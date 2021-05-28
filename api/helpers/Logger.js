const logException = (ex) => {
  for (field in ex.errors)
    console.error(`exception error: ${ex.errors[field].message}`);
};

const logError = (err) => {
  console.error(err);
};

module.exports = {
  logException,
  logError,
};
