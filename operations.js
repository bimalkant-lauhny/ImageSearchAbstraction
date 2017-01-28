const assert = require('assert');

exports.insertSearchRes = function (db, doc, callback) { 
    db.insert(doc, function (err, result) {
        assert.equal(null, err);
        callback(null, result);
    });
};

exports.findSearchRes = function (db, callback) {
    db.find({}).sort({timestamp: 1}).exec(function (err, result) {
        assert.equal(null, err); 
        callback(null, result);  
    });
}; 

exports.deleteSearchRes = function (db, doc, callback) {
    db.remove(doc, function (err, result) {
        assert.equal(null, err);    
        callback(null, result);
    });
};
