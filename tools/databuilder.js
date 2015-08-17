var time               = process.hrtime(),
    path               = require('path'),
    fs                 = require('fs'),
    jsonq              = require('jsonq'),
    heroesJson         = require('../data/heroes.json'),
    correctionsJson    = require('../data/corrections.json'),
    talentBuildsJson   = require('../data/herotalentbuilds.json'),
    winPercentagesJson = require('../data/herowinpercentages.json');

var heroData = [],
    correctNames = jsonq(correctionsJson),
    heroTalentBuilds = getTalentNames(talentBuildsJson.results.talents),
    heroWinPercentages = winPercentagesJson.results.heroes;

// Populate heroData with base statistics and win percentages
for (var i = 0; i < heroesJson.length; i++) {
  var hero = heroesJson[i],
      heroName = checkName(hero.name),
      winPercentages = jsonq(heroWinPercentages);

  var heroWinPercent = winPercentages.find('name', function () {
    return this.text === heroName;
  })
    .sibling('winPercent')
    .value()[0];

  for (var tier in hero.talents) {
    for (var talent in hero.talents[tier]) {
      var thisTalent = hero.talents[tier][talent],
          optimal = getOptimalTalent(thisTalent.name, heroName);

      hero.talents[tier][talent].optimal = optimal;
    }
  }

  heroData.push({
    "id": i + 1,
    "name": heroName,
    "imageName": imageName(heroName),
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
    time = process.hrtime(time);
    console.log('Data written in %dms', (time[1]/1000000).toFixed(2));
  }
);

function checkName(name) {
  foundMatch = "";
  var foundMatch = correctNames.find('name', function () {
    return this.toString() === name;
  });

  return foundMatch.length ? foundMatch.sibling('correctName').value()[0] : name;
}

function imageName(name) {
  return name.replace(/\W/g, '').toLowerCase()
}

function getTalentNames(talents) {
  var talentNames = [];
  for (var i = 0; i < talents.length; i++) {

    var talentName = talents[i].name;
    talentName = talentName.substring(0, talentName.indexOf(':'));

    var talentHero = decodeURI(talents[i].url);
    talentHero = talentHero.substring(talentHero.lastIndexOf('?Hero=') + 6);

    talentNames.push({
      "name": talentName,
      "hero": talentHero
    });
  }
  return talentNames;
}

function getOptimalTalent(talent, hero) {
  var isOptimal = false;

  for (var i = 0; i < heroTalentBuilds.length; i++) {
    var currentTalent = heroTalentBuilds[i];
    if (currentTalent.name == talent && currentTalent.hero == hero) {
      isOptimal = true;
    }
  }

  return isOptimal;
}
