const mongoose = require("mongoose");
const Joi = require("joi");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 4,
    required: true,
  },
});

const Category = mongoose.model("Category", categorySchema);

function validateCategory(category) {
  const schema = {
    name: Joi.string().required().min(4),
  };

  return Joi.validate(category, schema);
}

module.exports.categorySchema = categorySchema;
module.exports.Category = Category;
module.exports.validate = validateCategory;
