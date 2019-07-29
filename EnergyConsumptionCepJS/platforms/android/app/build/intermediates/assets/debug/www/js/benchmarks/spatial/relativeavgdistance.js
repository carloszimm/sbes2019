
function relativeAvgDistanceCepjs_minInterval_tumblingCountWindow_minWindowSize(total){
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
                    cepjs.relativeAvgDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeAvgDistance event'))
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

function relativeAvgDistanceCepjs_minInterval_tumblingCountWindow_maxWindowSize(total){
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
                    cepjs.relativeAvgDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeAvgDistance event'))
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

function relativeAvgDistanceCepjs_maxInterval_tumblingCountWindow_minWindowSize(total){
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
                    cepjs.relativeAvgDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeAvgDistance event'))
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

function relativeAvgDistanceCepjs_maxInterval_tumblingCountWindow_maxWindowSize(total){
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
                    cepjs.relativeAvgDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeAvgDistance event'))
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

function relativeAvgDistanceCepjs_minInterval_slidingCountWindow_minWindowSize(total){
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
                    cepjs.relativeAvgDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeAvgDistance event'))
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

function relativeAvgDistanceCepjs_minInterval_slidingCountWindow_maxWindowSize(total){
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
                    cepjs.relativeAvgDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeAvgDistance event'))
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

function relativeAvgDistanceCepjs_maxInterval_slidingCountWindow_minWindowSize(total){
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
                    cepjs.relativeAvgDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeAvgDistance event'))
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

function relativeAvgDistanceCepjs_maxInterval_slidingCountWindow_maxWindowSize(total){
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
                    cepjs.relativeAvgDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeAvgDistance event'))
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

function relativeAvgDistanceCepjsMost_minInterval_tumblingCountWindow_minWindowSize(total){
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
                    cepjsMostCore.relativeAvgDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeAvgDistance event'))
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

function relativeAvgDistanceCepjsMost_minInterval_tumblingCountWindow_maxWindowSize(total){
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
                    cepjsMostCore.relativeAvgDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeAvgDistance event'))
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

function relativeAvgDistanceCepjsMost_maxInterval_tumblingCountWindow_minWindowSize(total){
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
                    cepjsMostCore.relativeAvgDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeAvgDistance event'))
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

function relativeAvgDistanceCepjsMost_maxInterval_tumblingCountWindow_maxWindowSize(total){
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
                    cepjsMostCore.relativeAvgDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeAvgDistance event'))
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

function relativeAvgDistanceCepjsMost_minInterval_slidingCountWindow_minWindowSize(total){
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
                    cepjsMostCore.relativeAvgDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeAvgDistance event'))
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

function relativeAvgDistanceCepjsMost_minInterval_slidingCountWindow_maxWindowSize(total){
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
                    cepjsMostCore.relativeAvgDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeAvgDistance event'))
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

function relativeAvgDistanceCepjsMost_maxInterval_slidingCountWindow_minWindowSize(total){
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
                    cepjsMostCore.relativeAvgDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeAvgDistance event'))
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

function relativeAvgDistanceCepjsMost_maxInterval_slidingCountWindow_maxWindowSize(total){
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
                    cepjsMostCore.relativeAvgDistance(['of event'], 'payload',
                        distance => distance > 500, 'relativeAvgDistance event'))
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
