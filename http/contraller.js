var mongo = require('koa-mongo');
var helperMongo = require('../helper/helper_mongo');

exports.home = function *(){
  yield this.render('index',{display:"display:none"});
};

exports.status = function *(){
  var collection = this.request.query.num.toString();

  if(collection){
    // var item = yield this.mongo.db('plant').collection(collection).findOne();
    var item = yield helperMongo.find(collection,{});
    // yield item.sort(function(a, b) {
    //   return b.createAt - a.createAt;
    // });
    if(item){
      yield this.render('status',{data:item});
    }
    else{
      yield this.render('index',{display:"display:block"});
    }
  }
  else{
    yield this.render('index',{display:"display:block"});
  }

}

exports.information = function *(){
  var result = this.request.body;
  var collection = uid = result.uid;
  var temperature = result.temperature || "Fault";
  var humidity = result.humidity || "Fault";
  var water = result.water || "Fault";
  var brightness = result.brightness || "Fault";
  var createAt = Date.now();									  
	var doc = {'uid':uid,
              'temperature':temperature,
              'humidity':humidity,
              'water':water,
              'brightness':brightness,
              'createAt':createAt
            };
  if(result.uid){
    this.body = {message:"Success"};
    yield this.mongo.db('plant').collection(collection).insert(doc);
  }
  else{
    this.body = {message:"Fail"};
  }
};

