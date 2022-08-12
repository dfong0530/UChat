const express = require('express');
const router = express.Router();
const axios = require('axios').default;

router.route("/get-location").get(async(req, res) => {

    const {lat, lng} = req.query;
    const ret = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.Google_Maps_API_KEY}`);
    const data = await ret.data;

    const address = data.plus_code.compound_code.split(", ");
    res.status(200).json({city: address[0].split(" ")[1], country: address[2]});
});

module.exports = router