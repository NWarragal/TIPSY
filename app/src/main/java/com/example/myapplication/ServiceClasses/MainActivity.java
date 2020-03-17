package com.example.myapplication.ServiceClasses;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.viewpager.widget.ViewPager;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import com.example.myapplication.GUI.MainScreen.Cockteil_Item;
import com.example.myapplication.R;
import com.google.android.material.tabs.TabLayout;
import com.mikepenz.iconics.typeface.FontAwesome;
import com.mikepenz.materialdrawer.Drawer;
import com.mikepenz.materialdrawer.model.DividerDrawerItem;
import com.mikepenz.materialdrawer.model.PrimaryDrawerItem;
import com.mikepenz.materialdrawer.model.SecondaryDrawerItem;
import com.mikepenz.materialdrawer.model.SectionDrawerItem;

import java.util.ArrayList;


public class MainActivity extends AppCompatActivity {

    private ViewPager mainScreenPager;
    private MainScreenPagerAdapter mainScreenPagerAdapter;
    private TabLayout tabIndicator;
    private Button nextButton;
    private Button prevButton;
    private int selectedItemPosition = 0;
    private ArrayList<Cockteil_Item> randomCocktailList;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main1);

        Toolbar toolbar = findViewById(R.id.mainScreenToolbar);
        setSupportActionBar(toolbar);
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);

        new Drawer()
                .withActivity(this)
                .withToolbar(toolbar)
                .withActionBarDrawerToggle(true)
                .withHeader(R.layout.drawer_header)
                .addDrawerItems(
                        new PrimaryDrawerItem().withName(R.string.drawer_item_home).withIcon(FontAwesome.Icon.faw_home).withBadge("99").withIdentifier(1),
                        new PrimaryDrawerItem().withName(R.string.drawer_item_free_play).withIcon(FontAwesome.Icon.faw_gamepad),
                        new PrimaryDrawerItem().withName(R.string.drawer_item_custom).withIcon(FontAwesome.Icon.faw_eye).withBadge("6").withIdentifier(2),
                        new SectionDrawerItem().withName(R.string.drawer_item_settings),
                        new SecondaryDrawerItem().withName(R.string.drawer_item_help).withIcon(FontAwesome.Icon.faw_cog),
                        new SecondaryDrawerItem().withName(R.string.drawer_item_open_source).withIcon(FontAwesome.Icon.faw_question).setEnabled(false),
                        new DividerDrawerItem(),
                        new SecondaryDrawerItem().withName(R.string.drawer_item_contact).withIcon(FontAwesome.Icon.faw_github).withBadge("12+").withIdentifier(1)
                )
                .build();

        randomCocktailList=new ArrayList<>();
        randomCocktailList.add(new Cockteil_Item("Cocktail",3f,R.drawable.cocktail));
        randomCocktailList.add(new Cockteil_Item("Cocktail",4f,R.drawable.cocktail1));
        randomCocktailList.add(new Cockteil_Item("Cocktail",3.5f,R.drawable.cocktail2));
        randomCocktailList.add(new Cockteil_Item("Cocktail",2f,R.drawable.cocktail3));
        randomCocktailList.add(new Cockteil_Item("Cocktail",5f,R.drawable.cocktail4));

        mainScreenPager=findViewById(R.id.mainScreenViewPager);
        mainScreenPagerAdapter=new MainScreenPagerAdapter(this,randomCocktailList);
        mainScreenPager.setAdapter(mainScreenPagerAdapter);

        tabIndicator=findViewById(R.id.mainScreenSelectedItemIndicator);
        tabIndicator.setupWithViewPager(mainScreenPager);

        nextButton=findViewById(R.id.mainScreenNextButton);
        prevButton=findViewById(R.id.mainScreenPreviousButton);

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


    }


}
