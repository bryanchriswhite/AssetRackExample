/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , assets = require('./assets')
  ;

var app = express();

// all environments
app.set('port', process.env.PORT || 3000)
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'jade')
  .use(express.favicon())
  .use(express.logger('dev'))
  .use(express.json())
  .use(express.urlencoded())
  .use(express.methodOverride())
  .use(assets)
  .use(app.router)
  .use(express.static(path.join(__dirname, 'public')))
;

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});