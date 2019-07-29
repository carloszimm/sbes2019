# Overview
The benchmarks are wrapped in functions according to the variables considered in the latin square experiment design. The following variables are taken into account:
 - event creation rate (interval)
 - window type (tumbling or sliding)
 - window size

The function naming adopts the following pattern:
**operationLibrary_intervalType_windowType_windowSize**
where:
- Operations:
  - absence
  - all
  - any
  - always
  - sometimes
  - avgDistance
  - maxDistance
  - minDistance
  - relativeAvgDistance
  - relativeMaxDistance
  - relativeMinDistance
  - nHighestValues
  - nLowestValues
  - count
  - valueAvg
  - valueMax
  - valueMin
  - decreasing
  - increasing
  - stable
  - nonDecreasing
  - nonIncreasing
  - mixed

- Library
  - rcepjs
  - rcepjsMost

- Interval type:
  - minInterval
  - maxInterval

- Window types:
  - tumblingCountWindow
  - slidingCountWindow

- Window size:
  - minWindowSize
  - maxWindowSize

That way, these are the possible combinations:
- [operation]Rcepjs_minInterval_tumblingCountWindow_minWindowSize
- [operation]Rcepjs_minInterval_tumblingCountWindow_maxWindowSize
- [operation]Rcepjs_maxInterval_tumblingCountWindow_minWindowSize
- [operation]Rcepjs_maxInterval_tumblingCountWindow_maxWindowSize
- [operation]Rcepjs_minInterval_slidingCountWindow_minWindowSize
- [operation]Rcepjs_minInterval_slidingCountWindow_maxWindowSize
- [operation]Rcepjs_maxInterval_slidingCountWindow_minWindowSize
- [operation]Rcepjs_maxInterval_slidingCountWindow_maxWindowSize
- [operation]RcepjsMost_minInterval_tumblingCountWindow_minWindowSize
- [operation]RcepjsMost_minInterval_tumblingCountWindow_maxWindowSize
- [operation]RcepjsMost_maxInterval_tumblingCountWindow_minWindowSize
- [operation]RcepjsMost_maxInterval_tumblingCountWindow_maxWindowSize
- [operation]RcepjsMost_minInterval_slidingCountWindow_minWindowSize
- [operation]RcepjsMost_minInterval_slidingCountWindow_maxWindowSize
- [operation]RcepjsMost_maxInterval_slidingCountWindow_minWindowSize
- [operation]RcepjsMost_maxInterval_slidingCountWindow_maxWindowSize

# Configuration
Configuration related to number of samples or maximum time can be set in the setupbench file by changing the customOptions object(minSamples) and maxTime variable respectively.