const router = require ("express").Router();
const shortid = require("shortid");
const validURL = require("valid-url");
const ShortURLs = require("../models/shortUrls");

router.get("/", (req, res) => {
  res
  .status(403)
  .send("Proibido");
});

router.post ("/url/shorten", async (req,res) => {
  var targetURL = req.body.targetURL;
  var baseURL = "http://localhost:3000";

  if(!validURL.isUri(baseURL)){
    res.status(400).json("Base URL is invalid.");
  }

  if (validURL.isUri(targetURL)){
    try{
      if(req.body.shortid){
        var alreadyExists = await ShortURLs.findOne({shortID: req.body.shortID});
        if(!alreadyExists){
          shortenedID = req.body.shortID;

          let generetedURL = `${baseURL}/${shortenedID}`;

          url = new ShortURLs({
            targetURL: targetURL,
            shortID: shortenedID
          });

          await url.save();
          res.status(201).json(url);
          return;
        }else{
          res.status(400).json("The requested ID is already in use.");
        return;
        }
      }else{
        var url = await ShortURLs.findOne({
          targetURL: targetURL
        });
        if(url){
          res.status(200).json(url);
        }else{
          var shortenedID;
          shortenedID = shortid.generate();

          let generatedURL = `${baseURL}/${shortenedID}`;

          url = new ShortURLs({
            targetURL: targetURL,
            shortID: shortenedID
          })

          await url.save();
          res.status(201).json(url);
        }
      }
    }catch(err){
      console.log(err);
    }
  }else{
    res.status(400).json("Target URL is not a valid URL");
  }
});


module.exports = router;