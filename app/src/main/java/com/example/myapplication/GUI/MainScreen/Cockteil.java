package com.example.myapplication.GUI.MainScreen;

public class Cockteil {
    String ID;
    String Name;
    String Ingredients;
    String Device;
    String Recipe;
    String Categories;
    String Description;

    public String getID() {
        return ID;
    }

    public String getName() {
        return Name;
    }

    public String getIngredients() {
        return Ingredients;
    }

    public String getDevice() {
        return Device;
    }

    public String getRecipe() {
        return Recipe;
    }

    public String getCategories() {
        return Categories;
    }

    public String getDescription() {
        return Description;
    }



    public Cockteil(String ID, String Name, String Ingredients, String Device, String Recipe, String Categories, String Description) {
        this.ID = ID;
        this.Name = Name;
        this.Ingredients = Ingredients;
        this.Categories = Categories;
        this.Device = Device;
        this.Recipe = Recipe;
        this.Description = Description;
    }

}
