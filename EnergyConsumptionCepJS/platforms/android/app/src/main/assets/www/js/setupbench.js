var Point = cepjs.Point;
var fixedPoint = new Point(46.01001, -86.3195);

// Codes bellow to be used in the spatial patterns (don't modify it)
// Solution from https://stackoverflow.com/questions/6878761/javascript-how-to-create-random-longitude-and-latitudes
// LONGITUDE -180 to + 180
function generateRandomLong() {
    var num = (Math.random()*180).toFixed(5);
    var posorneg = Math.floor(Math.random());
    if (posorneg == 0) {
        num = num * -1;
    }
    return num;
}
// LATITUDE -90 to +90
function generateRandomLat() {
    var num = (Math.random()*90).toFixed(5);
    var posorneg = Math.floor(Math.random());
    if (posorneg == 0) {
        num = num * -1;
    }
    return num;
}

function generateRandomPoint(){
    return new Point(generateRandomLat(), generateRandomLong());
}

var proceed = function(){}

/* callbacks invoked during benchmark's lifecycle */
function onStartIteration(){
    var name = "args"
    cordova.exec(initSuccess, initFailure, "CtrExec", "init", [name]);
}

function onCompleteIteration(callback, count){
    proceed = function(){
        callback(null, count);
    }
    
    var name = "args"
    cordova.exec(endSuccess, endFailure, "CtrExec", "end", [name]);
}

function onComplete(err, n){
    var name = "args"
    cordova.exec(endSuccess, endFailure, "CtrExec", "complete", [name]);
}

// benchmark max time
var maxTime = 20000; //milliseconds
var maxEvents = 5000; //number of events

//time
//var streamController_cepjs = cepjs.takeUntil(cepjs.timer(maxTime));
//amount
var streamController_cepjs = cepjs.take(maxEvents);
//time
//var streamController_cepjsMost = cepjsMostCore.takeUntil(cepjsMostCore.timer(maxTime));
//amount
var streamController_cepjsMost = cepjsMostCore.take(maxEvents);


// window creation rate
/*
    Note:
    2 milliseconds is equal to 500 events/sec
    1 millisecond is equal to 1000 events/sec
*/
var minInterval = 2; // milliseconds
var maxInterval = 1; //milliseconds

var minWindowSize = 500;
var maxWindowSize = 1000;



function initSuccess(data){
    //alert("OK init: ");
}

function initFailure(data){
    //alert("FAIL init: ");
}

function endSuccess(data){
    //alert("OK end: ");
}

function endFailure(data){
    //alert("FAIL end: ");
}
