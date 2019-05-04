import Item from "../item";
import express from "express";

const router = express.Router();

router.get("", (req, res, next) => {
  return res.json(Item.list);
});

router.post("", (req, res, next) => {
  let newItem = new Item(req.body.name, req.body.id);
  return res.json(newItem);
});

router.get("/:id", (req, res, next) => {
  let foundItem = Item.find(+req.params.id);
  return res.json(foundItem);
});

router.patch("/:id", (req, res, next) => {
  let foundItem = Item.update(+req.params.id, req.body);
  return res.json(foundItem);
});

router.delete(":/id", (req, res, next) => {
  Item.remove(+req.params.id);
  return res.json("Removed item");
});

module.exports = router;
