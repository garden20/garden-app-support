var fs = require('fs');

module.exports = function (root, _path, settings, doc, callback) {
    var filename = settings.changelog;
    
    fs.readFile(settings.changelog, 'utf-8', function (err, data) {
        if (err) {
            return callback(err);
        }
        if (!doc.kanso) doc.kanso = {};
        doc.kanso.changelog = new Buffer(data).toString('base64');
        callback(null, doc);
    });
};
