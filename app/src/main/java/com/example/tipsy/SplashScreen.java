package com.example.tipsy;

import android.app.Activity;
import android.os.Bundle;
import android.content.Intent;
import android.os.Handler;

public class SplashScreen extends Activity {
    private final  int displayLeght=2000;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.splashscreen);


        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
                Intent mainIntent = new Intent(SplashScreen.this, MainActivity.class);
                SplashScreen.this.startActivity(mainIntent);
                SplashScreen.this.finish();
            }
        },displayLeght);
    }
    @Override
    public void onBackPressed()
    {
        super.onBackPressed();
    }


}
