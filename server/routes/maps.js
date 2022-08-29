const express = require('express');
const router = express.Router();
const axios = require('axios').default;


//We didn't want to expose the google maps API key on git hub. So we commented this code segment out. 
//The frontend makes a request to this specifc endpoint on heorku. The server side code on heroku is
//identical.
router.route("/get-location").get(async(req, res) => {

    // const {lat, lng} = req.query;
    // const ret = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.Google_Maps_API_KEY}`);
    // const data = await ret.data;

    // const address = data.plus_code.compound_code.split(", ");
    // res.status(200).json({city: address[0].split(" ")[1], country: address[2]});

    res.status(200).json(req);
});

module.exports = router