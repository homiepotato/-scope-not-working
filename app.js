var express = require('express'),
	 app = express(),
   http = require('http'),
   path = require('path'),
   MongoClient = require('mongodb').MongoClient,
   cons = require('consolidate') 
   routes = require('./routes');
MongoClient.connect('mongodb://localhost:27017/homie', function(err, db) {
    "use strict";
    if(err) throw err;
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/public/views');
app.engine('html', cons.swig);
app.set('view engine', 'html');
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(express.cookieParser());
app.use(express.favicon());
app.use(express.bodyParser());
app.use(express.logger('dev'));
app.use(express.methodOverride());
app.use(express.session({ secret: 'Super Duper Awesome Duck' }));
app.use(app.router);
// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

routes(app, db);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

});

