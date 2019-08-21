const hummus = function(factor) {
  const ingredient = function(amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};
  

hummus(1);

// everything is in the function hummus.
// it goes to line 2, and line 9-14 they give values to amount, unit, and name.
// it goes to the line 3, then assign amount * factor (whatever it is) = ingredientAmount.
// then if the ingredientAmount is bigger than 1, the unit from line 2 will be added with "s".
// then it will print out ingredient, ingredientAmount, unit, and name.

//String literal (`$`): it lets me do some interperations. It gives me strings.

//Why do I need to give values for ingredients in the end?
// because it's a calling. I cannot call the ingredients before it is created. It also cannot be inside the created function.