// process.chdir('./back-end');
// require('child_process').exec('sails lift');

const fs = require('fs');

// _redirects will be created or overwritten by default.
fs.copyFile('_redirects', './dist/_redirects', (err) => {
  if (err) throw err;
  console.log('_redirects was copied to dist folder!');
});