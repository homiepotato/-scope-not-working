module.exports = exports = function(app, db) {
app.use(function (req,res) {
 res.status(404).render('error', {
 url: req.originalUrl
  });
});

app.get('*',function(req, res){
  res.render('master');
});


}