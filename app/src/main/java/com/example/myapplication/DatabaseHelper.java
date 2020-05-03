package com.example.myapplication;

import android.content.Context;
import android.database.Cursor;
import android.database.SQLException;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteException;
import android.database.sqlite.SQLiteOpenHelper;
import android.util.Log;


import com.example.myapplication.GUI.MainScreen.Cockteil;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;


public class DatabaseHelper extends SQLiteOpenHelper {

    String DB_PATH = null;
    Cursor cursor;
    Cockteil cockteil;
    private static String DB_NAME = "xyeta";
    private SQLiteDatabase myDataBase;
    private final Context myContext;
    public ArrayList<Object> CocktailList = new ArrayList<>();

    public DatabaseHelper(Context context) {
        super(context, DB_NAME, null, 10);
        this.myContext = context;
        this.DB_PATH = "/data/data/" + context.getPackageName() + "/" + "databases/";
        Log.e("Path 1", DB_PATH);
    }


    public void createDataBase() throws IOException {
        boolean dbExist = checkDataBase();
        if (dbExist) {
        } else {
            this.getReadableDatabase();
            try {
                copyDataBase();
            } catch (IOException e) {
                throw new Error("Error copying database");
            }
        }
    }

    private boolean checkDataBase() {
        SQLiteDatabase checkDB = null;
        try {
            String myPath = DB_PATH + DB_NAME;
            checkDB = SQLiteDatabase.openDatabase(myPath, null, SQLiteDatabase.OPEN_READONLY);
        } catch (SQLiteException e) {
        }
        if (checkDB != null) {
            checkDB.close();
        }
        return checkDB != null ? true : false;
    }

    private void copyDataBase() throws IOException {
        InputStream myInput = myContext.getAssets().open(DB_NAME);
        String outFileName = DB_PATH + DB_NAME;
        OutputStream myOutput = new FileOutputStream(outFileName);
        byte[] buffer = new byte[10];
        int length;
        while ((length = myInput.read(buffer)) > 0) {
            myOutput.write(buffer, 0, length);
        }
        myOutput.flush();
        myOutput.close();
        myInput.close();

    }

    public void openDataBase() throws SQLException {
        String myPath = DB_PATH + DB_NAME;
        myDataBase = SQLiteDatabase.openDatabase(myPath, null, SQLiteDatabase.OPEN_READONLY);

    }

    @Override
    public synchronized void close() {
        if (myDataBase != null)
            myDataBase.close();
        super.close();
    }

    @Override
    public void onCreate(SQLiteDatabase db) {
    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
        if (newVersion > oldVersion)
            try {
                copyDataBase();
            } catch (IOException e) {
                e.printStackTrace();

            }
    }

    private Cursor query(String table, String[] columns, String selection, String[] selectionArgs, String groupBy, String having, String orderBy) {
        return myDataBase.query(table, columns, selection, selectionArgs, groupBy, having, orderBy);
    }
    public String getInfo(DB_InfoType type)
    {
        Cursor c = query("Сocktails", null, null, null, null, null, null);
        String s=new String();

        if (c.moveToFirst()) {
            do {
                s=s.concat(c.getString(type.ordinal()));
            } while (c.moveToNext());
        }
        c.close();
        return s;
    }
    public ArrayList<Cockteil> getAllInfo(ArrayList<Cockteil> arrayList ) {
        cursor = query("Сocktails", null, null, null, null, null, null);
        if(cursor.moveToFirst())
        {
            do {
                Cockteil cockteil = new Cockteil(cursor.getString(0), cursor.getString(1), cursor.getString(2), cursor.getString(3), cursor.getString(4), cursor.getString(5), cursor.getString(6));
                arrayList.add(cockteil);
            }while (cursor.moveToNext()) ;
        }
            System.out.println(arrayList.get(0));
        return arrayList;
    }
}
