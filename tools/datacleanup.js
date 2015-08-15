var path               = require('path'),
    fs                 = require('fs'),
    jsonq              = require('jsonq'),
    heroesJson         = require('../data/heroes.json'),
    correctionsJson    = require('../data/corrections.json'),
    talentBuildsJson   = require('../data/herotalentbuilds.json'),
    winPercentagesJson = require('../data/herowinpercentages.json');

var heroData = [],
    correctNames = jsonq(correctionsJson),
    heroTalentBuilds = talentBuildsJson.results.talents,
    heroWinPercentages = winPercentagesJson.results.heroes;

// Populate heroData with base statistics
for (var i = 0; i < heroesJson.length; i++) {
  var hero = heroesJson[i];

  heroData.push({
    "id": i + 1,
    "name": checkName(hero.name),
    "role": hero.role,
    "franchise": hero.franchise,
    "ratings": hero.ratings,
    "talents": hero.talents
  });
}


function checkName(name) {
  foundMatch = "";
  var foundMatch = correctNames.find('name', function () {
    return this.toString() === name;
  });

  return foundMatch.length ? foundMatch.sibling('correctName').value()[0] : name;
}

fs.writeFile(
  path.join(__dirname, '../src/data/heroData.json'),
  JSON.stringify(heroData),
  function (err) {
    if (err) throw err;
    console.log('Data written');
  }
);
