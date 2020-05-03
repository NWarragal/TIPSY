package com.example.myapplication.GUI.MainScreen;

public class Cockteil_Item {

    String cocktailName;
    int cocktailRating;
    int cocktailImage;

    public Cockteil_Item(String cocktailName, int cocktailRating, int cocktailImage) {
        this.cocktailName = cocktailName;
        this.cocktailRating = cocktailRating;
        this.cocktailImage = cocktailImage;
    }
   
    public String getCocktailName() {
        return cocktailName;
    }

    public int getCocktailRating() {
        return cocktailRating;
    }

    public int getCocktailImage() {
        return cocktailImage;
    }

    public void setCocktailName(String cocktailName) {
        this.cocktailName = cocktailName;
    }

    public void setCocktailRating(int cocktailRating) {
        this.cocktailRating = cocktailRating;
    }

    public void setCocktailImage(int cocktailImage) {
        this.cocktailImage = cocktailImage;
    }
}
