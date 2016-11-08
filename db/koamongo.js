var mongo = require('koa-mongo');

// var Server = mongo.Server;																				
// var Db=mongo.Db;																			

// var server = new Server('localhost',27017,{auto_reconnect:true});
// var db = new Db('plant',server);

exports.showOne = function *(){
  var i = yield this.mongo.db('plant').collection('test0').findOne();
  console.log(i);
};