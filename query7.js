
var showCursorItems = function(cursor){
	while (cursor.hasNext()) {
   		printjson(cursor.next());
	}
}

var db = db.getSisterDB("db102");

//db.usersNonIndex.drop();


// var start = (new Date()).getTime();

// for(i = 0; i<1000000; i++){
// 	db.usersNonIndex.insert(
// 		{
// 			i: i,
// 			username: 'user'+i,
// 			age: Math.floor(Math.random()*120),
// 			created: new Date()
// 		}
// 	);
// }

// print((new Date()).getTime() - start);


// db.usersNonIndex.ensureIndex({username:1})
// db.usersNonIndex.ensureIndex({age:1,username:1})
// db.usersNonIndex.ensureIndex({username:1,age:1})



// print('----------------------------------------------------');
// var explainObj1 = db.usersNonIndex.find({age:30}).explain("executionStats");
// printjson(explainObj1.executionStats)


// print("===================================")
// var explainObj2 = db.usersNonIndex.find({username:'user101'}).explain("executionStats");
// printjson(explainObj2.executionStats)


// var explainObj = db.usersNonIndex.find({"_id" : ObjectId("5ad2ddb5f912fbceb206cccc")}).explain("executionStats");
// printjson(explainObj.executionStats)

// var explainObj = db.usersNonIndex.find({})
// 	.limit(100000)
// 	.sort({age:1,username: 1})
// 	//.hint({$natural:1})
// 	//.hint({username:1,age:1})
// 	//.hint({age:1,username:1})
//  	.explain("executionStats");

// printjson(explainObj.executionStats);


// var explainObj1 = db.usersNonIndex.find({
// 	 "age" : {"$gte" : 21, "$lte" : 50}
// 	})
// 	.sort({"username" : 1})
// 	//.hint({username:1,age:1})
// 	.hint({age:1,username:1})
//  	.explain("executionStats");

// printjson(explainObj1.executionStats);



// var explainObj1 = db.usersNonIndex.find({
// 	 "age" : {"$gte" : 21, "$lte" : 50}
// 	})
// 	.sort({"username" : 1})
// 	.limit(100).skip(1000)
// 	.hint({age:1,username:1})
//  	.explain("executionStats");

// print('use age_username index spend:'+explainObj1.executionStats.executionTimeMillis+'ms');

// var explainObj2 = db.usersNonIndex.find({
// 	 "age" : {"$gte" : 21, "$lte" : 50}
// 	})
// 	.sort({"username" : 1})
// 	.limit(100).skip(10000)
// 	.hint({username:1,age:1})
//  	.explain("executionStats");
// print('use username_age index spend:'+explainObj2.executionStats.executionTimeMillis+'ms');