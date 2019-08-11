const Quote = require("../models/quote.model");
const moment = require("moment");
exports.index = (req, res) => {
  Quote.find({}, (err, result) => {
    if (err) return console.log(err);
    let { ...data } = result;
    res.render("index", { data });
  });
};
exports.create = (req, res) => {
  let quote = new Quote({
    author: req.body.author,
    quote: req.body.quote
  });
  quote.save(err => {
    if (err) return console.log(err);
    res.redirect("/");
  });
};
exports.details = (req, res) => {
  Quote.findById(req.params.id, (err, result) => {
    if (err) return console.log(err);
    res.render("quote", { result });
  });
};
exports.update = (req, res) => {
  Quote.findByIdAndUpdate(
    req.params.id,
    { $set: { author: req.body.author, quote: req.body.quote } },
    (err, result) => {
      if (err) return console.log(err);

      // res.render("edit", { result });
    }
  );
};
exports.delete = (req, res) => {
  Quote.findByIdAndRemove(req.params.id, err => {
    if (err) return console.log(err);
    res.send("Deleted successfully");
  });
};
