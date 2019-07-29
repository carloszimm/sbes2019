package com.github.rcepjs.dashbench.listeners;

import com.android.volley.Response;

import com.github.rcepjs.dashbench.CtrExecBench;

public final class WhatNow implements Response.Listener<String>{

    @Override
    public void onResponse(String response) {
        System.out.println("back From End Itt");
        CtrExecBench.singleton.callJS("proceed");
    }

}
