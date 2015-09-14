/**
 * Created by sebastian-mattern on 13/09/15.
 *
 * REST Api
 */
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('data/database');

db.serialize(function () {
    db.run("CREATE TABLE IF NOT EXISTS sample (key TEXT, value TEXT)");
});

var express = require('express');
var router = express.Router();

/**
 * Get sample info
 */
router.get('/', function (req, res) {

    var response = [];

    db.each("SELECT * FROM sample", function (err, result) {
        response.push(result);
    }, function () {
        res.json(response)
    });

});

module.exports = router;

