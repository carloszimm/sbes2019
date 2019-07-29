
function nonIncreasingCepjs_minInterval_tumblingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjs.interval(minInterval)
                .pipe(streamController_cepjs,
                    cepjs.tumblingCountWindow(minWindowSize),
                    cepjs.nonIncreasing(['interval event'], 'payload', undefined, 'nonIncreasing event'))
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

function nonIncreasingCepjs_minInterval_tumblingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjs.interval(minInterval)
                .pipe(streamController_cepjs,
                    cepjs.tumblingCountWindow(maxWindowSize),
                    cepjs.nonIncreasing(['interval event'], 'payload', undefined, 'nonIncreasing event'))
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

function nonIncreasingCepjs_maxInterval_tumblingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjs.interval(maxInterval)
                .pipe(streamController_cepjs,
                    cepjs.tumblingCountWindow(minWindowSize),
                    cepjs.nonIncreasing(['interval event'], 'payload', undefined, 'nonIncreasing event'))
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

function nonIncreasingCepjs_maxInterval_tumblingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjs.interval(maxInterval)
                .pipe(streamController_cepjs,
                    cepjs.tumblingCountWindow(maxWindowSize),
                    cepjs.nonIncreasing(['interval event'], 'payload', undefined, 'nonIncreasing event'))
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

function nonIncreasingCepjs_minInterval_slidingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjs.interval(minInterval)
                .pipe(streamController_cepjs,
                    cepjs.slidingCountWindow(minWindowSize),
                    cepjs.nonIncreasing(['interval event'], 'payload', undefined, 'nonIncreasing event'))
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

function nonIncreasingCepjs_minInterval_slidingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjs.interval(minInterval)
                .pipe(streamController_cepjs,
                    cepjs.slidingCountWindow(maxWindowSize),
                    cepjs.nonIncreasing(['interval event'], 'payload', undefined, 'nonIncreasing event'))
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

function nonIncreasingCepjs_maxInterval_slidingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjs.interval(maxInterval)
                .pipe(streamController_cepjs,
                    cepjs.slidingCountWindow(minWindowSize),
                    cepjs.nonIncreasing(['interval event'], 'payload', undefined, 'nonIncreasing event'))
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

function nonIncreasingCepjs_maxInterval_slidingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjs.interval(maxInterval)
                .pipe(streamController_cepjs,
                    cepjs.slidingCountWindow(maxWindowSize),
                    cepjs.nonIncreasing(['interval event'], 'payload', undefined, 'nonIncreasing event'))
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

function nonIncreasingCepjsMost_minInterval_tumblingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjsMostCore.interval(minInterval)
                .pipe(streamController_cepjsMost,
                    cepjsMostCore.tumblingCountWindow(minWindowSize),
                    cepjsMostCore.nonIncreasing(['interval event'], 'payload', undefined, 'nonIncreasing event'))
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

function nonIncreasingCepjsMost_minInterval_tumblingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjsMostCore.interval(minInterval)
                .pipe(streamController_cepjsMost,
                    cepjsMostCore.tumblingCountWindow(maxWindowSize),
                    cepjsMostCore.nonIncreasing(['interval event'], 'payload', undefined, 'nonIncreasing event'))
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

function nonIncreasingCepjsMost_maxInterval_tumblingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjsMostCore.interval(maxInterval)
                .pipe(streamController_cepjsMost,
                    cepjsMostCore.tumblingCountWindow(minWindowSize),
                    cepjsMostCore.nonIncreasing(['interval event'], 'payload', undefined, 'nonIncreasing event'))
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

function nonIncreasingCepjsMost_maxInterval_tumblingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjsMostCore.interval(maxInterval)
                .pipe(streamController_cepjsMost,
                    cepjsMostCore.tumblingCountWindow(maxWindowSize),
                    cepjsMostCore.nonIncreasing(['interval event'], 'payload', undefined, 'nonIncreasing event'))
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

function nonIncreasingCepjsMost_minInterval_slidingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjsMostCore.interval(minInterval)
                .pipe(streamController_cepjsMost,
                    cepjsMostCore.slidingCountWindow(minWindowSize),
                    cepjsMostCore.nonIncreasing(['interval event'], 'payload', undefined, 'nonIncreasing event'))
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

function nonIncreasingCepjsMost_minInterval_slidingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjsMostCore.interval(minInterval)
                .pipe(streamController_cepjsMost,
                    cepjsMostCore.slidingCountWindow(maxWindowSize),
                    cepjsMostCore.nonIncreasing(['interval event'], 'payload', undefined, 'nonIncreasing event'))
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

function nonIncreasingCepjsMost_maxInterval_slidingCountWindow_minWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjsMostCore.interval(maxInterval)
                .pipe(streamController_cepjsMost,
                    cepjsMostCore.slidingCountWindow(minWindowSize),
                    cepjsMostCore.nonIncreasing(['interval event'], 'payload', undefined, 'nonIncreasing event'))
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

function nonIncreasingCepjsMost_maxInterval_slidingCountWindow_maxWindowSize(total){
    var count = 0;
	async.whilst(
		function() { return count < total; },
		function(callback) {
            count++;
            onStartIteration();
            cepjsMostCore.interval(maxInterval)
                .pipe(streamController_cepjsMost,
                    cepjsMostCore.slidingCountWindow(maxWindowSize),
                    cepjsMostCore.nonIncreasing(['interval event'], 'payload', undefined, 'nonIncreasing event'))
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
