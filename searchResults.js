const request = require('request');
const assert = require('assert');

var apiUrl = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyDZwcMN4UDddshOk-p06zmH6hyNrB4Vrh4&cx=014181052884012788486:qzasrs_wzqs&searchType=image&fileType=jpg&imgSize=xlarge&alt=json';

exports.getSearchResults = function (offset, queryString, callback) {
    request(apiUrl + 
        '&num=' + offset + 
        '&q=' + queryString, 
        function (err, response, body) {
            assert.equal(null, err); 
            if (response.statusCode !== 200) {
                callback(new Error('Invalid Status Code'));
            } else {
                callback(null, filterResults(body)); 
            }
    });
}

function filterResults(body) {
    body = JSON.parse(body);
    items = body['items'];
    var filteredRes = [];
    for (let ele of items) {
        filteredRes.push({
            'link': ele['link'],
            'snippet': ele['snippet']
        });
    }
    return filteredRes; 
};
