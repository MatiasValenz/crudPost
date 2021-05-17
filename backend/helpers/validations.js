const validator = require("validator");

const validationData = (data) => {
  const { name, description } = data;

  if (validator.isEmpty(name.trim())) {
    throw new Error("Name is required");
  }
  if (!validator.isLength(name.trim(), 3, 10)) {
    throw new Error("Name minlength 3 and maxlength 10");
  }

  if (validator.isEmpty(description.trim())) {
    throw new Error("Description is required");
  }
  if (!validator.isLength(description.trim(), 5, 50)) {
    throw new Error("Description minlength 5 and maxlength 50");
  }
};

module.exports = validationData;
