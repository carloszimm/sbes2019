
function relativeMinDistanceCepjs_minInterval_tumblingCountWindow_minWindowSize(total){
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
                    cepjs.relativeMinDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMinDistance event'))
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

function relativeMinDistanceCepjs_minInterval_tumblingCountWindow_maxWindowSize(total){
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
                    cepjs.relativeMinDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMinDistance event'))
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

function relativeMinDistanceCepjs_maxInterval_tumblingCountWindow_minWindowSize(total){
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
                    cepjs.relativeMinDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMinDistance event'))
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

function relativeMinDistanceCepjs_maxInterval_tumblingCountWindow_maxWindowSize(total){
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
                    cepjs.relativeMinDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMinDistance event'))
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

function relativeMinDistanceCepjs_minInterval_slidingCountWindow_minWindowSize(total){
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
                    cepjs.relativeMinDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMinDistance event'))
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

function relativeMinDistanceCepjs_minInterval_slidingCountWindow_maxWindowSize(total){
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
                    cepjs.relativeMinDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMinDistance event'))
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

function relativeMinDistanceCepjs_maxInterval_slidingCountWindow_minWindowSize(total){
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
                    cepjs.relativeMinDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMinDistance event'))
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

function relativeMinDistanceCepjs_maxInterval_slidingCountWindow_maxWindowSize(total){
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
                    cepjs.relativeMinDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMinDistance event'))
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

function relativeMinDistanceCepjsMost_minInterval_tumblingCountWindow_minWindowSize(total){
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
                    cepjsMostCore.relativeMinDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMinDistance event'))
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

function relativeMinDistanceCepjsMost_minInterval_tumblingCountWindow_maxWindowSize(total){
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
                    cepjsMostCore.relativeMinDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMinDistance event'))
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

function relativeMinDistanceCepjsMost_maxInterval_tumblingCountWindow_minWindowSize(total){
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
                    cepjsMostCore.relativeMinDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMinDistance event'))
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

function relativeMinDistanceCepjsMost_maxInterval_tumblingCountWindow_maxWindowSize(total){
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
                    cepjsMostCore.relativeMinDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMinDistance event'))
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

function relativeMinDistanceCepjsMost_minInterval_slidingCountWindow_minWindowSize(total){
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
                    cepjsMostCore.relativeMinDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMinDistance event'))
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

function relativeMinDistanceCepjsMost_minInterval_slidingCountWindow_maxWindowSize(total){
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
                    cepjsMostCore.relativeMinDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMinDistance event'))
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

function relativeMinDistanceCepjsMost_maxInterval_slidingCountWindow_minWindowSize(total){
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
                    cepjsMostCore.relativeMinDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMinDistance event'))
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

function relativeMinDistanceCepjsMost_maxInterval_slidingCountWindow_maxWindowSize(total){
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
                    cepjsMostCore.relativeMinDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeMinDistance event'))
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
