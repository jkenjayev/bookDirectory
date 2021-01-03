const mongoose = require("mongoose");
const { categorySchema } = require("./categories");
const Joi = require("joi");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
  },
  isPublished: {
    type: Boolean,
    required: true,
  },
  pageCount: {
    type: Number,
    min: 10,
    required: true,
  },
  publishedDate: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  author: {
    type: String,
    required: true,
    minlength: 4,
  },
  categories: {
    type: categorySchema,
    required: true,
  },
});

const Book = mongoose.model("Book", bookSchema);

function validateBook(book) {
  const schema = {
    title: Joi.string().required().min(3).max(255),
    isPublished: Joi.boolean().required(),
    pageCount: Joi.number().required().min(4),
    publishedDate: Joi.date().required(),
    author: Joi.string().required().min(4).max(255),
    categories: Joi.string().required(),
  };

  return Joi.validate(book, schema);
}

(module.exports.validate = validateBook), (module.exports.Book = Book);
