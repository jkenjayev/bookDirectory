const express = require("express");
const mongoose = require("mongoose");
const { Category,validate } = require("../modules/category");
const router = express.Router();

router.get("/", async (req, res) => {
    const categories = await Category.find().sort("name");
    if(!categories) return res.status(404).send("Oops! Categories does not exist");
    res.send(categories);
});

router.post("/", async (req, res) => {
    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    
    const category = new Category({
        categories: req.body.category
    });
    const result = await category.save();
    res.status(201).send(result);
});

router.put("/:categoryId", async (req, res) => {
    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    
    const category = await Category.findByIdAndUpdate(req.params.categoryId, {
        
    })
})
module.exports = router;