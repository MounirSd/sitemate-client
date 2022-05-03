const request = require('request');
const args = process.argv
const uri = 'http://localhost:3001/api/issue';

console.log(args[2])
const command = args[2];
switch (command) {
    case '--help':
        console.log('create           Create new Issue | args: title, description');
        console.log('read             Retrieves an issue | args: id');
        console.log('update           Create new Issue | args: id, title, description');
        console.log('delete           Create new Issue | args: id');
        break;
    case 'create':
        var options = {
            uri: uri,
            method: 'POST',
            json: {
                "title": args[3],
                "description": args[4]
            }
        };

        request(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log('created!')
            }
            else {
                console.error(error);
            }
        });
    case 'read':
        var options = {
            uri: uri + '/' + args[3],
            method: 'GET',
        };

        request(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body)
            }
            else {
                console.error(error);
            }
        });
        break;
    case 'update':
        var options = {
            uri: uri + '/' + args[3],
            method: 'POST',
            json: {
                "title": args[4],
                "description": args[5]
            }
        };

        request(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log('updated!')
            }
            else {
                console.error(error);
            }
        });
    case 'delete':
        var options = {
            uri: uri + '/' + args[3],
            method: 'DELETE',
        };

        request(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body)
            }
            else {
                console.error(error);
            }
        });
        break;
} 
