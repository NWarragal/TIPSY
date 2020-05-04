package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.database.Cursor;
import android.database.SQLException;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import com.example.myapplication.GUI.MainScreen.Cockteil;

import java.io.IOException;
import java.util.ArrayList;

public class Sandbox extends AppCompatActivity {

    Button b1;
    TextView t1;
    Cockteil cockteil;
    SQLiteDatabase db;
    Cursor userCursor;
    DatabaseHelper myDbHelper;
    Cursor c;
    Cursor cursor;
    public  ArrayList<Cockteil> CocktailList = new ArrayList<>();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sandbox);

        t1=(TextView) findViewById(R.id.List_Categories);
        b1=(Button)findViewById(R.id.button);



        myDbHelper = new DatabaseHelper(Sandbox.this);
        try {
            myDbHelper.createDataBase();
        } catch (IOException ioe) {
            throw new Error("Unable to create database");
        }
        try {
            myDbHelper.openDataBase();
        } catch (SQLException sqle) {
            throw sqle;
        }
        Toast.makeText(Sandbox.this, "Successfully Imported", Toast.LENGTH_SHORT).show();

        //c = myDbHelper.query("Сocktails", null, null, null, null, null, null);

        //t1.setText(myDbHelper.getInfo(DB_InfoType.Name));

        myDbHelper.getAllInfo(CocktailList);
        t1.setText(CocktailList.get(4).getRecipe());



        //t1.setText((CharSequence) cockteil_item.cockteil_items[0]);

        /*b1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                t1.setText(myDbHelper.getInfo(DB_InfoType.Name));
            }
        });*/



    }

//        DatabaseHelper myDbHelper = new DatabaseHelper(Sandbox.this);
//
//        try {
//            myDbHelper.createDataBase();
//        } catch (IOException ioe) {
//            throw new Error("Unable to create database");
//        }
//        try{
//            myDbHelper.openDataBase();
//        }catch(SQLException ex){
//
//        }
//        Toast.makeText(Sandbox.this, "Success", Toast.LENGTH_SHORT).show();
//        Cursor c = myDbHelper.query("Cocktails", new String[]{myDbHelper.COLUMN_NAME}, null, null, null, null, null);
//        if (c.moveToFirst()) {
//            do {
//                System.out.println(c.getString(0));
//            } while (c.moveToNext());
//        }
//
//        c.close();
//        myDbHelper.close();

//        b1=findViewById(R.id.button1);
//        t1=findViewById(R.id.textView2);


//        databaseHelper = new DatabaseHelper(getApplicationContext());
//        try {
//            databaseHelper.create_db();
//        } catch (FileNotFoundException e) {
//            e.printStackTrace();
//        }

//        db = databaseHelper.open();
//
//        String[] arr={
//                DatabaseHelper.COLUMN_ID
//        };
//
//
//        String query = "SELECT " + DatabaseHelper.COLUMN_ID
//                + " FROM " + DatabaseHelper.TABLE;
//        Cursor cursor2 = db.rawQuery(query, null);
//        while (cursor2.moveToNext()) {
//            int id = cursor2.getInt(cursor2
//                    .getColumnIndex(DatabaseHelper.COLUMN_ID));
//        }









//        userCursor = db.query(
//                DatabaseHelper.TABLE,
//                arr,
//                null,
//                null,
//                null,
//                null,
//                null
//        );

//        int Id=userCursor.getColumnIndex(DatabaseHelper.COLUMN_ID);
//        while(userCursor.moveToNext()){
//            int curId=userCursor.getInt(Id);
//            System.out.println(curId);
//        }
//
//        databaseHelper.close();
//        userCursor.close();

//        b1.setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View v) {
//
//                SQLiteDatabase db = getBaseContext().openOrCreateDatabase("info.db", MODE_PRIVATE, null);
//                db.execSQL("CREATE TABLE IF NOT EXISTS Coctailes (name TEXT, age INTEGER)");
//                db.execSQL("INSERT INTO users VALUES ('Tom Smith', 23);");
//                db.execSQL("INSERT INTO users VALUES ('John Dow', 31);");
//
//                Cursor query = db.rawQuery("SELECT * FROM users;", null);
//                TextView textView = (TextView) findViewById(R.id.textView);
//                if (query.moveToFirst()) {
//                    do {
//                        String name = query.getString(0);
//                        int age = query.getInt(1);
//                        textView.append("Name: " + name + " Age: " + age + "\n");
//                    }
//                    while (query.moveToNext());
//                }
//                query.close();
//                db.close();
//
//            }
//        });


}
