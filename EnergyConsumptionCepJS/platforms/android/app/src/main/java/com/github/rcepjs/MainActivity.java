/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
 */

package com.github.rcepjs;

import android.os.Bundle;
import android.view.WindowManager;

import com.android.volley.toolbox.Volley;

import com.github.rcepjs.dashbench.api.UI;
import com.github.rcepjs.dashbench.api.VolleyQueue;
import com.github.rcepjs.dashbench.configuration.BenchmarkConfiguration;
import com.github.rcepjs.dashbench.configuration.IpAddress;
import com.github.rcepjs.dashbench.runners.DefaultBenchmarkRunner;
import org.apache.cordova.*;



public class MainActivity extends CordovaActivity
{
    static String choosenBenchmark;
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        //  infoText = (TextView) findViewById(R.id.info_text);

        // UI.getInstance().setInfoTextComponent(this.infoText);
        VolleyQueue.getInstance().setRequestQueue(Volley.newRequestQueue(this));

        UI.getInstance().setInfoText("Application started!");

        choosenBenchmark = getIntent().getStringExtra("param");
        IpAddress.setEndpointAddress(getIntent());
        BenchmarkConfiguration.getInstance().setIterations(getIntent());

        DefaultBenchmarkRunner benchmarkRunner = new DefaultBenchmarkRunner(choosenBenchmark);

        // enable Cordova apps to be started in the background
        Bundle extras = getIntent().getExtras();
        if (extras != null && extras.getBoolean("cdvStartInBackground", false)) {
            moveTaskToBack(true);
        }

        // Set by <content src="index.html" /> in config.xml
        loadUrl(launchUrl);


    }
}
