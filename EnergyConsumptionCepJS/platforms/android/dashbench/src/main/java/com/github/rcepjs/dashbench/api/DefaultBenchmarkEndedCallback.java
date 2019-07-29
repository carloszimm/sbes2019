package com.github.rcepjs.dashbench.api;

import com.github.rcepjs.dashbench.listeners.DefaultErrorListener;
import com.github.rcepjs.dashbench.listeners.WhatNow;

import com.android.volley.Request;
import com.android.volley.toolbox.StringRequest;

public final class DefaultBenchmarkEndedCallback implements IBenchmarkEndedCallback {
    @Override
    public void execute() {
        UI.getInstance().appendInfoText("Benchmark finished!");
        StringRequest request = new StringRequest(Request.Method.GET, EnumDashboard.DONE.toString(),new WhatNow(),new DefaultErrorListener("nunca é usado"));
        VolleyQueue.getInstance().getRequestQueue().add(request);
    }
}
