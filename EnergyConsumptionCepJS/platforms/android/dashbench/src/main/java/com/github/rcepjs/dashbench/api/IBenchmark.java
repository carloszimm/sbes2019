package com.github.rcepjs.dashbench.api;
public interface IBenchmark {
    String getName();
    void runWarmUp();
    void runBenchmark();
}
