var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(path.join(__dirname, '../build'), function (err) {
  if (err) {
    console.log('Error while deploying');
  }
  else {
    console.log('Published to GitHub');
  }
});
