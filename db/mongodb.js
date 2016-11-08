var mongo = require('mongodb');												
var Server = mongo.Server;																				
var Db=mongo.Db;																			

var server = new Server('localhost',27017,{auto_reconnect:true});
var db = new Db('plant',server);

exports.pushData = function(result){
  db.open(function(err,db){
    db.collection(result.uid,function(err,collection){	
      var uid = result.uid;
      var temperature = result.temperature || "Fault";
      var humidity = result.humidity || "Fault";
      var water = result.water || "Fault";
      var brightness = result.brightness || "Fault";									  
		  var doc = {'uid':uid,
                'temperature':temperature,
                'humidity':humidity,
                'water':water,
                'brightness':brightness
              };						 
      collection.insert(doc);
	  });
    db.close();
  });
};

exports.showOne = function *(){
  db.open(function(err,db){
    db.collection("test0",function(err,collection){
      var query_doc = {"uid":"test0"}; 	
      collection.findOne(query_doc,function(err,item){
          // yield this.render('index', { msg: item });
          // return "item";
      });
	  });
    db.close();
  });
};

