const fs = require('fs-extra'),
  path = require('path');

(function clean() {
  fs.remove(path.join(__dirname, '../public/js'), (err) => {
    if (err) {
      console.error('Failed to clean public/js');
    } else {
      console.log('cleaned public/js');
    }
  });

  fs.remove(path.join(__dirname, '../public/css'), (err) => {
    if (err) {
      console.error('Failed to clean public/css');
    } else {
      console.log('cleaned public/css');
    }
  });

  fs.remove(path.join(__dirname, '../public/lib'), (err) => {
    if (err) {
      console.error('Failed to clean public/lib');
    } else {
      console.log('cleaned public/lib');
    }
  });
}());
