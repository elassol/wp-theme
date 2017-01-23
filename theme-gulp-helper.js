var fs         = require('fs');
var HandleBars = require('handlebars');
var mkdirp     = require('mkdirp');


module.exports.create = function(name, author) {



    // create style.css
    var contents = fs.readFileSync('./handlebars-templates/style.css.hbs', 'utf-8');
    var output = HandleBars.compile(contents)({name: name, author: author});
    fs.writeFile("./theme/src/style.css", output);

    var safeName = convertNameToJavascriptSafeString(name);

    // create functions.php
    var contents = fs.readFileSync('./handlebars-templates/functions.php.hbs', 'utf-8');
    var output = HandleBars.compile(contents)({name: name, safeName: safeName});
    fs.writeFile("./theme/src/functions.php", output);



}



var convertNameToJavascriptSafeString = function(name) {
  return camelCase(name);
}

var camelCase = function(string) {
    return string.toLowerCase().replace(/-(.)/g, function(match, group1) {
        return group1.toUpperCase();
    });
}


