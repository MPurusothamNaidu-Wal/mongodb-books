const Category = require('../models/category');
const getCategories = (req, res) => {
  Category.find((error, categories_list) => {
    if (error) {
      res.json(error);
    } else {
      res.json(categories_list);
    }
  });
};
const postCategories = (req, res) => {
  const categoryObj = new Category(req.body);
  categoryObj.save((err) => {
    if (err) {
      res.json(err);
    } else {
      res.json({ status: 'Category is added successfully' });
    }
  });
};
const deleteCategories = (req, res) => {
  Category.findByIdAndDelete(req.params.id, req.body, function (err) {
    console.log(req.body);
    if (err) {
      res.json(err);
    } else {
      res.json({ status: `Category with id ${req.params.id} is removed` });
    }
  });
};
function updateCategories(req, res) {
  const newData = req.body;
  Category.findByIdAndUpdate(req.params.id, newData, function (err) {
    if (err) {
      res.json(err);
    } else {
      res.json(`category with _id ${req.params.id} is updated`);
    }
  });
}
module.exports = {
  getCategories,
  postCategories,
  deleteCategories,
  updateCategories,
};
