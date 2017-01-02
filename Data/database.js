//database.js
(function (database){

  var mongodb = require ("mongodb");
  //var mongoUrl = "mongodb://localhost:27017/theBoard";
  var mongoUrl = "mongodb://Martin:Teki3409@ds141118.mlab.com:41118/devpunk-node";

  var theDb = null;

  database.getDb = function(next){
    if(!theDb){
      //connect to the database
      mongodb.MongoClient.connect(mongoUrl, function(err, db){
        if (err){
          next(err, null);
        }else{
          theDb = {
            db: db,
            notes: db.collection("notes")
          };
          next(null, theDb);
        }
      });
    }else{
      next(null, theDb);
    }
  }

})(module.exports);
