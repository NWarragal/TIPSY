package com.example.myapplication.GUI.MainScreen;

import android.content.Context;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.TextView;

import com.example.myapplication.DatabaseHelper;

import java.util.ArrayList;
import java.util.List;

public class Cocktail_Adapter extends ArrayAdapter<Cockteil> {

        public Cocktail_Adapter(Context context,ArrayList<Cockteil> list) {
            super(context, android.R.layout.simple_list_item_2,list);
        }

        @Override
        public View getView(int position, View convertView, ViewGroup parent) {
            Cockteil cockteil = getItem(position);

            if (convertView == null) {
                convertView = LayoutInflater.from(getContext())
                        .inflate(android.R.layout.simple_list_item_2, null);
            }
            ((TextView) convertView.findViewById(android.R.id.text1))
                    .setText(cockteil.getName());
            ((TextView) convertView.findViewById(android.R.id.text2))
                    .setText(cockteil.getCategories());
            return convertView;
        }

}
