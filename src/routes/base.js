const router = require("express").Router();
const ShortURLs = require("../models/shortUrls");
const path = require("path");
const { Types } = require("mongoose");

router.get("/:id", async (req, res) => {
  try{
    var url = await ShortURLs.findOne({shortID: req.params.id});

    if(url){
      return res.redirect(url.targetURL);
    } else {
      return res.status(404).json("Sem URL");
    }
  }catch(err){
    console.log(err);
    res.status(500).json("Erro interno");
  }
});

module.exports = router;