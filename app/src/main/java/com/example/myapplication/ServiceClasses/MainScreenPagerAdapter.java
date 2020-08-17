package com.example.myapplication.ServiceClasses;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.RatingBar;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.viewpager.widget.PagerAdapter;

import com.example.myapplication.GUI.MainScreen.Cockteil_Item;
import com.example.myapplication.R;

import java.util.ArrayList;

public class MainScreenPagerAdapter extends PagerAdapter {

    Context mContext;
    ArrayList<Cockteil_Item> mListScreen;

    public MainScreenPagerAdapter(Context mContext, ArrayList<Cockteil_Item> mListScreen) {
        this.mContext = mContext;
        this.mListScreen = mListScreen;
    }


    @NonNull
    @Override
    public Object instantiateItem(@NonNull ViewGroup container, int position) {
        LayoutInflater inflater=(LayoutInflater) mContext.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
        View layoutScreen = inflater.inflate(R.layout.one_coctail_item_layout,null);

        TextView cocktailName=layoutScreen.findViewById(R.id.mainScreenCocktailName);
        ImageView imgSlide=layoutScreen.findViewById(R.id.mainScreenCoctailImage);
        RatingBar ratingBar=layoutScreen.findViewById(R.id.mainScreenRatingBar);

        cocktailName.setText(mListScreen.get(position).getCocktailName());
        imgSlide.setImageResource(mListScreen.get(position).getCocktailImage());
        ratingBar.setRating(mListScreen.get(position).getCocktailRating());

        container.addView(layoutScreen);

        return layoutScreen;
    }

    @Override
    public int getCount() {
        return mListScreen.size();
    }

    @Override
    public boolean isViewFromObject(@NonNull View view, @NonNull Object object) {
        return view==object;
    }

    @Override
    public void destroyItem(@NonNull ViewGroup container, int position, @NonNull Object object) {
        container.removeView((View)object);
    }
}
