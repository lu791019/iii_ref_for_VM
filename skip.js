var showCursorItems = function(cursor){
	while (cursor.hasNext()) {
   		printjson(cursor.next());
	}
}

var db = db.getSisterDB("db102");
db.usersRandom.drop()
var start = (new Date()).getTime();

 for(i = 0; i<1000; i++){
 	db.usersRandom.insert(
 		{
 			i:i,
 			username:'user'+i,
 			random: Math.random()
 			
 		}
 	);
 }

 print((new Date()).getTime() - start);

var useSkipToRandomFindUser = function(){
	var total = db.usersRandom.count();
	var random = Math.random();
	print("----->>random<<-----:"+random);
	var result = db.usersRandom.findOne({random:{$gt:random}})
	printjson(result)
}

for(i = 0 ; i < 10; i++){
	useSkipToRandomFindUser();
}



// var useGtOrLtToRandomFindUser = function(){
// 	var start = (new Date()).getTime();
// 	var total = db.usersRandom.count();
// 	var random = Math.random();
// 	print("random:"+random);
// 	var result = db.usersRandom.findOne({random:{$gt:random}})
// 	if(result == null){
// 		print("result == null")
// 		result = db.usersRandom.findOne({random:{$lt:random}})
// 	}
// 	printjson(result);
// 	print("use gt or lt:"+  ((new Date()).getTime() - start) + " ms");
// }

// for(i = 0 ; i < 10; i++){
// 	useGtOrLtToRandomFindUser();
// }



