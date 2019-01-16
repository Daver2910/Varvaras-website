var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

// app.get('/search/:id', function(req, res){

    url = 'http://localhost:63342/webscraper/node-web-scraper/test.html?_ijt=mlpgr3ar9kqefg9r1idu3t81sd';
    let json = {}
  request(url, function(error, response, html){
    if(!error) {
        var $ = cheerio.load(html);

        $('#department-name').filter(function () {

            var data = $(this);
            let title = 'hihihih'; // data.children().first().text()
            let release = data.text();

        json.title = title;
        json.release = release;
        })
        fs.writeFile('output.json', JSON.stringify(json), function (err) {
            console.log('File successfully written! - Check your project directory for the output.json file');
        })
    } else { console.log('there was an error => ', error)}

    res.send('dsfd')
      console.log($.html())
  })

// })




app.listen('8081');
console.log('Magic happens on port 8081');
exports = module.exports = app;
