namespace backEndWeb1.Domain
{
    public class Recipe
    {
        public int id { get; set; }
        public string authorName { get; set; } = "";
        public string recipeName { get; set; } = "";
        public string recipeType { get; set; } = "";
        public int recipeTime { get; set; } = 10;
        public string recipeDescription { get; set; } = "";

    }
}