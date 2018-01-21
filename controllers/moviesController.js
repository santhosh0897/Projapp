var movies=require('./movieData');
var dbservice= require('../services/dbservice');

exports.getAllMovies= function(req,res){
//console.log("connection object");
var db=dbservice.database;
var moviescollection=db.collection("movies");
moviescollection.find().toArray().then(function(result){
  var outputJson={
    "isSuccess":true,
    "data":result
  }
  return res.json(outputJson);
});
}

exports.addNewMovie=function(req,res,next){
var db=dbservice.database,
movie=req.body,
moviescollection=db.collection("movies");
moviescollection.insert(movie).then(function(save_data){
  return res.json({
    "isSuccess":true

  })
});
}
