
function avgDistanceCepjs_minInterval_tumblingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjs.interval(minInterval)
                .pipe(streamController_cepjs,
                    cepjs.mergeMap(x => cepjs.of(generateRandomPoint())),
                    cepjs.tumblingCountWindow(minWindowSize),
                    cepjs.avgDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'avgDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}

function avgDistanceCepjs_minInterval_tumblingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjs.interval(minInterval)
                .pipe(streamController_cepjs,
                    cepjs.mergeMap(x => cepjs.of(generateRandomPoint())),
                    cepjs.tumblingCountWindow(maxWindowSize),
                    cepjs.avgDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'avgDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}

function avgDistanceCepjs_maxInterval_tumblingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjs.interval(maxInterval)
                .pipe(streamController_cepjs,
                    cepjs.mergeMap(x => cepjs.of(generateRandomPoint())),
                    cepjs.tumblingCountWindow(minWindowSize),
                    cepjs.avgDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'avgDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}

function avgDistanceCepjs_maxInterval_tumblingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjs.interval(maxInterval)
                .pipe(streamController_cepjs,
                    cepjs.mergeMap(x => cepjs.of(generateRandomPoint())),
                    cepjs.tumblingCountWindow(maxWindowSize),
                    cepjs.avgDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'avgDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}

//sliding window

function avgDistanceCepjs_minInterval_slidingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjs.interval(minInterval)
                .pipe(streamController_cepjs,
                    cepjs.mergeMap(x => cepjs.of(generateRandomPoint())),
                    cepjs.slidingCountWindow(minWindowSize),
                    cepjs.avgDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'avgDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}

function avgDistanceCepjs_minInterval_slidingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjs.interval(minInterval)
                .pipe(streamController_cepjs,
                    cepjs.mergeMap(x => cepjs.of(generateRandomPoint())),
                    cepjs.slidingCountWindow(maxWindowSize),
                    cepjs.avgDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'avgDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}

// maxInterval

function avgDistanceCepjs_maxInterval_slidingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjs.interval(maxInterval)
                .pipe(streamController_cepjs,
                    cepjs.mergeMap(x => cepjs.of(generateRandomPoint())),
                    cepjs.slidingCountWindow(minWindowSize),
                    cepjs.avgDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'avgDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}

function avgDistanceCepjs_maxInterval_slidingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjs.interval(maxInterval)
                .pipe(streamController_cepjs,
                    cepjs.mergeMap(x => cepjs.of(generateRandomPoint())),
                    cepjs.slidingCountWindow(maxWindowSize),
                    cepjs.avgDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'avgDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}

// most

function avgDistanceCepjsMost_minInterval_tumblingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjsMostCore.interval(minInterval)
                .pipe(streamController_cepjsMost,
                    cepjsMostCore.mergeMap(x => cepjsMostCore.of(generateRandomPoint())),
                    cepjsMostCore.tumblingCountWindow(minWindowSize),
                    cepjsMostCore.avgDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'avgDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}

function avgDistanceCepjsMost_minInterval_tumblingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjsMostCore.interval(minInterval)
                .pipe(streamController_cepjsMost,
                    cepjsMostCore.mergeMap(x => cepjsMostCore.of(generateRandomPoint())),
                    cepjsMostCore.tumblingCountWindow(maxWindowSize),
                    cepjsMostCore.avgDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'avgDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}

function avgDistanceCepjsMost_maxInterval_tumblingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjsMostCore.interval(maxInterval)
                .pipe(streamController_cepjsMost,
                    cepjsMostCore.mergeMap(x => cepjsMostCore.of(generateRandomPoint())),
                    cepjsMostCore.tumblingCountWindow(minWindowSize),
                    cepjsMostCore.avgDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'avgDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}

function avgDistanceCepjsMost_maxInterval_tumblingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjsMostCore.interval(maxInterval)
                .pipe(streamController_cepjsMost,
                    cepjsMostCore.mergeMap(x => cepjsMostCore.of(generateRandomPoint())),
                    cepjsMostCore.tumblingCountWindow(maxWindowSize),
                    cepjsMostCore.avgDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'avgDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}

//sliding window

function avgDistanceCepjsMost_minInterval_slidingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjsMostCore.interval(minInterval)
                .pipe(streamController_cepjsMost,
                    cepjsMostCore.mergeMap(x => cepjsMostCore.of(generateRandomPoint())),
                    cepjsMostCore.slidingCountWindow(minWindowSize),
                    cepjsMostCore.avgDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'avgDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}

function avgDistanceCepjsMost_minInterval_slidingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjsMostCore.interval(minInterval)
                .pipe(streamController_cepjsMost,
                    cepjsMostCore.mergeMap(x => cepjsMostCore.of(generateRandomPoint())),
                    cepjsMostCore.slidingCountWindow(maxWindowSize),
                    cepjsMostCore.avgDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'avgDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}

// maxInterval

function avgDistanceCepjsMost_maxInterval_slidingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjsMostCore.interval(maxInterval)
                .pipe(streamController_cepjsMost,
                    cepjsMostCore.mergeMap(x => cepjsMostCore.of(generateRandomPoint())),
                    cepjsMostCore.slidingCountWindow(minWindowSize),
                    cepjsMostCore.avgDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'avgDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}

function avgDistanceCepjsMost_maxInterval_slidingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjsMostCore.interval(maxInterval)
                .pipe(streamController_cepjsMost,
                    cepjsMostCore.mergeMap(x => cepjsMostCore.of(generateRandomPoint())),
                    cepjsMostCore.slidingCountWindow(maxWindowSize),
                    cepjsMostCore.avgDistance(['of event'], fixedPoint, 'payload',
                        distance => distance > 500, 'avgDistance event'))
                .subscribe({
                    next: function(value){},
                    error: function(error){},
                    complete: function(){
                        onCompleteIteration(callback, count);
                    }
                });
		},
		onComplete
	);
}
