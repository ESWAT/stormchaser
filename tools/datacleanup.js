var path               = require('path'),
    fs                 = require('fs'),
    jsonq              = require('jsonq'),
    heroesJson         = require('../data/heroes.json'),
    talentBuildsJson   = require('../data/herotalentbuilds.json'),
    winPercentagesJson = require('../data/herowinpercentages.json');

var heroData = [],
    heroTalentBuilds = talentBuildsJson.results,
    heroWinPercentages = winPercentagesJson.results;

for (var i = 0; i < heroesJson.length; i++) {
  var hero = heroesJson[i];
  heroData.push({
    "id": i + 1,
    "name": hero.name,
    "role": hero.role,
    "franchise": hero.franchise,
    "ratings": hero.ratings,
    "talents": hero.talents
  });
}

fs.writeFile(
  path.join(__dirname, '../src/data/heroData.json'),
  JSON.stringify(heroData),
  function (err) {
    if (err) throw err;
    console.log('Data written');
  }
);
