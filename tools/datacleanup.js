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
  var hero = heroesJson[i],
      heroName = checkName(hero.name),
      winPercentages = jsonq(heroWinPercentages);

  var heroWinPercent = winPercentages.find('name', function () {
    return this.text === heroName;
  })
    .sibling('winPercent')
    .value()[0]

  heroData.push({
    "id": i + 1,
    "name": heroName,
    "role": hero.role,
    "franchise": hero.franchise,
    "winPercent": heroWinPercent.substring(0, heroWinPercent.length - 2),
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

function checkName(name) {
  foundMatch = "";
  var foundMatch = correctNames.find('name', function () {
    return this.toString() === name;
  });

  return foundMatch.length ? foundMatch.sibling('correctName').value()[0] : name;
}
