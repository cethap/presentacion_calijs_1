
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.header("Access-Control-Allow-Origin", "*");
  res.render('presentacion', {});
};

exports.movil = function(req, res){
  res.header("Access-Control-Allow-Origin", "*");
  res.render('movil', {});
};
