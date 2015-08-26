var time = process.hrtime(),
    path = require('path'),
    http = require('http'),
    fs = require('fs');

var heroesUrl = 'http://heroesjson.com/json/heroes.json',
    talentBuildsUrl = 'http://www.kimonolabs.com/download/469n4o28?apikey=srbSYOAPN9sUoYzyEhIhc074FgtGNsdl&type=json',
    winPercentagesUrl = 'http://www.kimonolabs.com/download/203n2j0q?apikey=srbSYOAPN9sUoYzyEhIhc074FgtGNsdl&type=json';

downloadData(heroesUrl, 'heroes.json');
downloadData(talentBuildsUrl, 'herotalentbuilds.json');
downloadData(winPercentagesUrl, 'herowinpercentages.json');

function downloadData(url, file) {
  http.get(url, function (res) {
    var body = '';

    res.on('data', function (chunk) {
      body += chunk;
    });

    res.on('end', function () {
      var fullResponse = JSON.parse(body);
      fs.writeFile(
        path.join(__dirname, '../data/', file),
        JSON.stringify(fullResponse),
        function (err) {
          if (err) throw err;
        }
      );
    });
  }).on('error', function (e) {
    console.log(e);
  });
}
