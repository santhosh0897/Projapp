var MongoClient= require('mongodb').MongoClient;
exports.createConnection= function(){
  MongoClient.connect("mongodb://santhosh:sachin@ds111138.mlab.com:11138/projector8").then(function(client){
    console.log("connected");
    exports.database= client.db("projector8");
    
  });


}
