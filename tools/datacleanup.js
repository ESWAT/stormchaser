var path               = require('path'),
    fs                 = require('fs'),
    jsonq              = require('jsonq'),
    heroes             = require('../data/heroes.json'),
    heroTalentBuilds   = require('../data/herotalentbuilds.json'),
    heroWinPercentages = require('../data/herowinpercentages.json');

var heroData = {};

heroData = JSON.stringify(heroes);

fs.writeFile(
  path.join(__dirname, '../src/data/heroData.json')
  heroData,
  function (err) {
    if (err) throw err;
    console.log('Data written');
  }
);
