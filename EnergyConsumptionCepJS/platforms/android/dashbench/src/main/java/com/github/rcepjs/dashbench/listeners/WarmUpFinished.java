package com.github.rcepjs.dashbench.listeners;

import com.android.volley.Response;

import com.github.rcepjs.dashbench.CtrExecBench;

public final class WarmUpFinished implements Response.Listener<String> {
    private String benchmark;
    public WarmUpFinished(String benchmark) {
        this.benchmark=benchmark;
    }
    @Override
    public void onResponse(String response) {
        CtrExecBench.singleton.callJS(benchmark);
       // this.benchmark.runBenchmark();
      //  UI.getInstance().appendInfoText("Benchmark "+benchmark.getName()+" finished");
    }
}
