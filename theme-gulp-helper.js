var fs         = require('fs');
var HandleBars = require('handlebars');
var mkdirp     = require('mkdirp');
var gutil      = require('gulp-util');

// Require config global variables 
require('./gulpconfig');

module.exports.create = function(name, author) {

    // create folders for the template parts before I create the template files
    mkdirp(basePaths.src + 'template-parts');
    mkdirp(basePaths.src + 'fonts');
    mkdirp(basePaths.src + 'images');
    mkdirp(basePaths.src + 'inc');
    mkdirp(basePaths.src + 'js');
    mkdirp(basePaths.src + 'js/vendor');
    mkdirp(basePaths.src + 'languages');
    mkdirp(basePaths.src + 'sass');


    // create style.css
    var contents = fs.readFileSync('./handlebars-templates/style.css.hbs', 'utf-8');
    var output = HandleBars.compile(contents)({name: name, author: author});
    fs.writeFile(basePaths.src + 'style.css', output);


    var safeName = convertNameToJavascriptSafeString(name);

    // create functions.php
    var contents = fs.readFileSync('./handlebars-templates/functions.php.hbs', 'utf-8');
    var output = HandleBars.compile(contents)({name: name, safeName: safeName});
    fs.writeFile(basePaths.src + 'functions.php', output);

    // create 404.php
    var contents = fs.readFileSync('./handlebars-templates/404.php.hbs', 'utf-8');
    var output = HandleBars.compile(contents)({name: name, safeName: safeName});
    fs.writeFile(basePaths.src + '404.php', output);

    // create archive-portfolio.php
    var contents = fs.readFileSync('./handlebars-templates/archive-portfolio.php.hbs', 'utf-8');
    var output = HandleBars.compile(contents)({name: name, safeName: safeName});
    fs.writeFile(basePaths.src + 'archive-portfolio.php', output);

    // create archive.php
    var contents = fs.readFileSync('./handlebars-templates/archive.php.hbs', 'utf-8');
    var output = HandleBars.compile(contents)({name: name, safeName: safeName});
    fs.writeFile(basePaths.src + 'archive.php', output);

    // create comments.php
    var contents = fs.readFileSync('./handlebars-templates/comments.php.hbs', 'utf-8');
    var output = HandleBars.compile(contents)({name: name, safeName: safeName});
    fs.writeFile(basePaths.src + 'comments.php', output);

    // create footer.php
    var contents = fs.readFileSync('./handlebars-templates/footer.php.hbs', 'utf-8');
    var output = HandleBars.compile(contents)({name: name, safeName: safeName});
    fs.writeFile(basePaths.src + 'footer.php', output);

    // create header_alt.php
    var contents = fs.readFileSync('./handlebars-templates/header_alt.php.hbs', 'utf-8');
    var output = HandleBars.compile(contents)({name: name, safeName: safeName});
    fs.writeFile(basePaths.src + 'header_alt.php', output);

    // create header.php
    var contents = fs.readFileSync('./handlebars-templates/header.php.hbs', 'utf-8');
    var output = HandleBars.compile(contents)({name: name, safeName: safeName});
    fs.writeFile(basePaths.src + 'header.php', output);

    // create index.php
    var contents = fs.readFileSync('./handlebars-templates/index.php.hbs', 'utf-8');
    var output = HandleBars.compile(contents)({name: name, safeName: safeName});
    fs.writeFile(basePaths.src + 'index.php', output);

    // create page.php
    var contents = fs.readFileSync('./handlebars-templates/page.php.hbs', 'utf-8');
    var output = HandleBars.compile(contents)({name: name, safeName: safeName});
    fs.writeFile(basePaths.src + 'page.php', output);

    // create search.php
    var contents = fs.readFileSync('./handlebars-templates/search.php.hbs', 'utf-8');
    var output = HandleBars.compile(contents)({name: name, safeName: safeName});
    fs.writeFile(basePaths.src + 'search.php', output);

    // create sidebar.php
    var contents = fs.readFileSync('./handlebars-templates/sidebar.php.hbs', 'utf-8');
    var output = HandleBars.compile(contents)({name: name, safeName: safeName});
    fs.writeFile(basePaths.src + 'sidebar.php', output);

    // create single.php
    var contents = fs.readFileSync('./handlebars-templates/single.php.hbs', 'utf-8');
    var output = HandleBars.compile(contents)({name: name, safeName: safeName});
    fs.writeFile(basePaths.src + 'single.php', output);

    // create content-none.php
    var contents = fs.readFileSync('./handlebars-templates/template-parts/content-none.php.hbs', 'utf-8');
    var output = HandleBars.compile(contents)({name: name, safeName: safeName});
    fs.writeFile(basePaths.src + 'template-parts/content-none.php', output);

    // create content-page.php
    var contents = fs.readFileSync('./handlebars-templates/template-parts/content-page.php.hbs', 'utf-8');
    var output = HandleBars.compile(contents)({name: name, safeName: safeName});
    fs.writeFile(basePaths.src + 'template-parts/content-page.php', output);

    // create content-search.php
    var contents = fs.readFileSync('./handlebars-templates/template-parts/content-search.php.hbs', 'utf-8');
    var output = HandleBars.compile(contents)({name: name, safeName: safeName});
    fs.writeFile(basePaths.src + 'template-parts/content-search.php', output);

    // create content.php
    var contents = fs.readFileSync('./handlebars-templates/template-parts/content.php.hbs', 'utf-8');
    var output = HandleBars.compile(contents)({name: name, safeName: safeName});
    fs.writeFile(basePaths.src + 'template-parts/content.php', output);

    // create files in inc folder custom-header.php
    var contents = fs.readFileSync('./handlebars-templates/inc/custom-header.php.hbs', 'utf-8');
    var output = HandleBars.compile(contents)({name: name, safeName: safeName});
    fs.writeFile(basePaths.src + 'inc/custom-header.php', output);

    // create files in inc folder customizer.php
    var contents = fs.readFileSync('./handlebars-templates/inc/customizer.php.hbs', 'utf-8');
    var output = HandleBars.compile(contents)({name: name, safeName: safeName});
    fs.writeFile(basePaths.src + 'inc/customizer.php', output);

    // create files in inc folder extras.php
    var contents = fs.readFileSync('./handlebars-templates/inc/extras.php.hbs', 'utf-8');
    var output = HandleBars.compile(contents)({name: name, safeName: safeName});
    fs.writeFile(basePaths.src + 'inc/extras.php', output);

    // create files in inc folder jetpack.php
    var contents = fs.readFileSync('./handlebars-templates/inc/jetpack.php.hbs', 'utf-8');
    var output = HandleBars.compile(contents)({name: name, safeName: safeName});
    fs.writeFile(basePaths.src + 'inc/jetpack.php', output);

    // create files in inc folder template-tags.php
    var contents = fs.readFileSync('./handlebars-templates/inc/template-tags.php.hbs', 'utf-8');
    var output = HandleBars.compile(contents)({name: name, safeName: safeName});
    fs.writeFile(basePaths.src + 'inc/template-tags.php', output);

    // create languages.pot files on the languages
    var contents = fs.readFileSync('./handlebars-templates/languages/languages.pot.hbs', 'utf-8');
    var output = HandleBars.compile(contents)({name: name, safeName: safeName});
    fs.writeFile(basePaths.src + 'languages/languages.pot', output);

    // create readme.txt files on the languages
    var contents = fs.readFileSync('./handlebars-templates/languages/readme.txt.hbs', 'utf-8');
    var output = HandleBars.compile(contents)({name: name, safeName: safeName});
    fs.writeFile(basePaths.src + 'languages/readme.txt', output);


    

    console.log(gutil.colors.green('Success New ' + safeName + ' Theme'));


}



var convertNameToJavascriptSafeString = function(name) {
  return camelCase(name);
}

var camelCase = function(string) {
    return string.toLowerCase().replace(/-(.)/g, function(match, group1) {
        return group1.toUpperCase();
    });
}


