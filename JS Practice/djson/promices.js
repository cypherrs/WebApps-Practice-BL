const fench = require('node-fetch');
fetch('D:\\Bridgelab\\WebApps\\WebApps-Practice-BL\\JS Practice\\djson\\data.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log("Data from JSON file:", data);
    })
    .catch(function(error) {
        console.log("There was an error:", error);
    });