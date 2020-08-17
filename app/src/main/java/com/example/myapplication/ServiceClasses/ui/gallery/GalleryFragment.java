package com.example.myapplication.ServiceClasses.ui.gallery;

import android.database.Cursor;
import android.database.SQLException;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.Observer;
import androidx.lifecycle.ViewModelProviders;

import com.example.myapplication.DatabaseHelper;
import com.example.myapplication.GUI.MainScreen.Cocktail_Adapter;
import com.example.myapplication.GUI.MainScreen.Cockteil;
import com.example.myapplication.R;
import com.example.myapplication.Sandbox;


import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Objects;

public class GalleryFragment extends Fragment {

    private GalleryViewModel galleryViewModel;
    ArrayList<String> phones = new ArrayList();
    ArrayList<String> selectedPhones = new ArrayList();

    ArrayAdapter<Cockteil> adapter;
    ListView phonesList;
    DatabaseHelper myDbHelper;

    Sandbox sandbox;
    public View onCreateView(@NonNull LayoutInflater inflater,
                             ViewGroup container, Bundle savedInstanceState) {
        galleryViewModel = ViewModelProviders.of(this).get(GalleryViewModel.class);
        View root = inflater.inflate(R.layout.fragment_gallery, container, false);
        phonesList = (ListView) root.findViewById(R.id.phonesList);
        myDbHelper = new DatabaseHelper(this.getContext());
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

        Toast.makeText(this.getContext(), "Successfully Imported", Toast.LENGTH_SHORT).show();
        ArrayList<Cockteil> CocktailList = new ArrayList();
        myDbHelper.getAllInfo(CocktailList);
        adapter = new Cocktail_Adapter(this.getContext(),CocktailList);
        phonesList.setAdapter(adapter);
        return root;
    }



}