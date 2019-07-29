// app-commands.js
// ========
var benchmarks = ["absence","all","any","always","sometimes" ,"avgDistance"  ,"maxDistance"  ,"minDistance"  ,"relativeAvgDistance"  ,"relativeMaxDistance"  ,"relativeMinDistance"  ,"nHighestValues"  ,"nLowestValues"  ,"count"  ,"valueAvg"  ,"valueMax"  ,"valueMin"  ,"decreasing"  ,"increasing"  ,"stable"  ,"nonDecreasing"  ,"nonIncreasing"  ,"mixed"];

 //var library = ["Cepjs","CepjsMost"]
 //var intervalWindow = ["minInterval","maxInterval"]
 //var windowType = ["tumblingCountWindow","slidingCountWindow"]
 //var windowSize = ["minWindowSize","maxWindowSize"]

// var library = ["Cepjs"]
 //var intervalWindow = ["maxInterval"]
 //var windowType = ["slidingCountWindow"]
 //var windowSize = ["minWindowSize"]

 var library = ["CepjsMost"]
var intervalWindow = ["minInterval"]
 var windowType = ["tumblingCountWindow"]
 var windowSize = ["maxWindowSize"]


var functions = [];

function nextOperation(operation){

	for (var i = functions.length - 1; i >= 0; i--) {
		if(functions[i] == operation){
			return functions[i+1]
		}
	} 
	return "over";

} 

 function getFunctions(){
 	var ind = 0;
 	for (var i = 0; i < benchmarks.length; i++) {
 		for (var w = 0; w < library.length; w++) {
 			for (var z = 0; z < intervalWindow.length; z++) {
 				for (var y = 0; y < windowType.length; y++) {
 					for (var x = 0; x < windowSize.length; x++) {
 						functions[ind] = (benchmarks[i]+library[w]+"_"+intervalWindow[z]+"_"+windowType[y]+"_"+windowSize[x]);
 						ind++;
 					}
 				}
 			}
 		}
 	}
 	return functions;
 }





function createDirIfNotExists(fs,dir){
	if (!fs.existsSync(dir)){
		fs.mkdirSync(dir);
	}
}
function callStartApp(http,myPort){
	http.get({host:'localhost', port:myPort, path:'/start'},function(resp){}).on("error",function(e){console.log(e.message)});
}
function logData(exec,adbCommandStrings,sessionData,fs,callback) {
	var fileName = sessionData.currentTest+"-"+sessionData.device+"-"+sessionData.counter.current+".txt";
	createDirIfNotExists(fs,'experiment-results');
	createDirIfNotExists(fs,'experiment-results/'+sessionData.device);
	var dir = 'experiment-results/' + sessionData.device + '/' + sessionData.currentTest;
	createDirIfNotExists(fs,dir);
	if(callback)
		exec(adbCommandStrings.outputBatteryStatsTo(dir+'/'+fileName),function(error,stdout,stderr){
			fs.appendFile(dir+'/'+fileName,"\r\nNumber of warm-up Iterations:"+sessionData.nWarmUpIterations+
				"\r\nNumber of iterations:"+sessionData.nIterations);
			callback();
		});
	else {
		fs.appendFile(dir+'/'+fileName,"\r\nNumber of warm-up Iterations:"+sessionData.nWarmUpIterations+
				"\r\nNumber of iterations:"+sessionData.nIterations);
		exec(adbCommandStrings.outputBatteryStatsTo(dir+'/'+fileName));
	}
}
module.exports = {
	benchmarks : function() {
		return getFunctions();
	},
	whatNow : function(exec,adbCommandStrings,sessionData,res){
		exec(adbCommandStrings.cleanBatteryStats, function(error, stdout, stderr) {
		  	res.send(sessionData.currentTest);	
		 });
	},
	logdata : function(exec,adbCommandStrings,sessionData,res,http,fs,myPort){
		logData(exec,adbCommandStrings,sessionData,fs,function(){
			sessionData.counter.current++;
			exec(adbCommandStrings.cleanBatteryStats);	
			res.send("logged");
		});
		//if( (sessionData.counter.current<=sessionData.counter.until) && (!sessionData.stop) ){
		//} 
		},
	done : function(exec,adbCommandStrings,sessionData,res,http,fs,myPort){
		//logData(exec,adbCommandStrings,sessionData,fs,function(){
	//		exec(adbCommandStrings.cleanBatteryStats);
		//	res.send("done");
		if(nextOperation(sessionData.currentTest) != "over"){
			res.send("done");
			sessionData.currentTest = nextOperation(sessionData.currentTest);
			sessionData.counter.current = 1;
			setTimeout(function(){callStartApp(http,myPort)},3000);
			exec(adbCommandStrings.killApp(sessionData.applicationId));
			
		}//	});
	},
	cleanbattery : function(exec,adbCommandStrings,res){
		exec(adbCommandStrings.cleanBatteryStats);
		res.send("cleaned");
	}
}
