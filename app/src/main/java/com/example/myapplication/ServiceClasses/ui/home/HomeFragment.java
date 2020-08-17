package com.example.myapplication.ServiceClasses.ui.home;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.drawerlayout.widget.DrawerLayout;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.Observer;
import androidx.lifecycle.ViewModelProviders;
import androidx.navigation.ui.AppBarConfiguration;
import androidx.viewpager.widget.ViewPager;

import com.example.myapplication.GUI.MainScreen.Cockteil_Item;
import com.example.myapplication.R;
import com.example.myapplication.ServiceClasses.MainScreenPagerAdapter;
import com.google.android.material.tabs.TabLayout;

import java.util.ArrayList;

public class HomeFragment extends Fragment {

    private HomeViewModel homeViewModel;
    private AppBarConfiguration mAppBarConfiguration;
    private ViewPager mainScreenPager;
    private MainScreenPagerAdapter mainScreenPagerAdapter;
    private TabLayout tabIndicator;
    private Button nextButton;
    private Button prevButton;
    private int selectedItemPosition = 0;
    private ArrayList<Cockteil_Item> randomCocktailList;
    private DrawerLayout drawer;

    public View onCreateView(@NonNull LayoutInflater inflater,
                             ViewGroup container, Bundle savedInstanceState) {
        homeViewModel = ViewModelProviders.of(this).get(HomeViewModel.class);
        View root = inflater.inflate(R.layout.fragment_home, container, false);

        randomCocktailList=new ArrayList<>();
        randomCocktailList.add(new Cockteil_Item("Cocktail",3,R.drawable.cocktail));
        randomCocktailList.add(new Cockteil_Item("Cocktail",4,R.drawable.cocktail1));
        randomCocktailList.add(new Cockteil_Item("Cocktail",3,R.drawable.cocktail2));
        randomCocktailList.add(new Cockteil_Item("Cocktail",2,R.drawable.cocktail3));
        randomCocktailList.add(new Cockteil_Item("Cocktail",5,R.drawable.cocktail4));

        mainScreenPager=root.findViewById(R.id.mainScreenViewPager);
        mainScreenPagerAdapter=new MainScreenPagerAdapter(this.getContext(),randomCocktailList);
        mainScreenPager.setAdapter(mainScreenPagerAdapter);

        tabIndicator=root.findViewById(R.id.mainScreenSelectedItemIndicator);
        tabIndicator.setupWithViewPager(mainScreenPager);

        nextButton=root.findViewById(R.id.mainScreenNextButton);
        prevButton=root.findViewById(R.id.mainScreenPreviousButton);

        nextButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                selectedItemPosition=mainScreenPager.getCurrentItem();
                if(selectedItemPosition<randomCocktailList.size()){
                    selectedItemPosition++;
                    mainScreenPager.setCurrentItem(selectedItemPosition);
                    if(selectedItemPosition==randomCocktailList.size()-1)
                        nextButton.setEnabled(false);
                    if(!prevButton.isEnabled())
                        prevButton.setEnabled(true);
                }

            }
        });

        prevButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                selectedItemPosition=mainScreenPager.getCurrentItem();
                if(selectedItemPosition<randomCocktailList.size() && selectedItemPosition!=0){
                    selectedItemPosition--;
                    mainScreenPager.setCurrentItem(selectedItemPosition);
                    if(selectedItemPosition==0)
                        prevButton.setEnabled(false);
                    if(!nextButton.isEnabled())
                        nextButton.setEnabled(true);
                }

            }
        });
        return root;
    }




}
