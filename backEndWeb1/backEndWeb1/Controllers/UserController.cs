using backEndWeb1.Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Data;
using System.Data.SqlClient;

namespace backEndWeb1.Controller
{

    [ApiController]
    [Route("api/")]
    public class UserController : ControllerBase
    {
        [HttpGet("get_recipes")]
        public List<Recipe> get_recipes()
        {
            string src = "Data Source=DESKTOP-6R40TAM;Initial Catalog=Recipes;Integrated Security=true;";
            string query = @"SELECT * FROM Recipe";
            List<Recipe> recipes = new List<Recipe>();
            try
            {
                SqlConnection connection = new SqlConnection(src);
                connection.Open();
                SqlCommand cmd = new SqlCommand(query, connection);
                SqlDataReader myReader;
                myReader = cmd.ExecuteReader();
                while (myReader.Read())
                {
                    Recipe recipe = new()
                    {
                        id = myReader.GetInt32("id"),
                        authorName = myReader.GetString("authorName"),
                        recipeName = myReader.GetString("recipeName"),
                        recipeType = myReader.GetString("recipeType"),
                        recipeTime = myReader.GetInt32("recipeTime"),
                        recipeDescription = myReader.GetString("recipeDescription")
                    };
                    recipes.Add(recipe);    


                }

                myReader.Close();
                connection.Close();


            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            return recipes;

        }

        [HttpPost("add_recipe")]
        public IActionResult add_recipe(Recipe recipe)
        {
            string src="Data Source=DESKTOP-6R40TAM;Initial Catalog=Recipes;Integrated Security=true;";

            try
            {
                SqlConnection connection = new SqlConnection(src);
                connection.Open();

                string query = "INSERT INTO Recipe(authorName, recipeName, recipeType, recipeTime, recipeDescription)" +
                    " VALUES('" + recipe.authorName + "', '" + recipe.recipeName + "', '" + recipe.recipeType + "', " +
                    recipe.recipeTime + ", '" + recipe.recipeDescription + "')";

                SqlCommand cmd = new SqlCommand(query, connection);
                cmd.ExecuteNonQuery();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return new JsonResult(ex.Message);
            }
            return new JsonResult(recipe);
        }

        [HttpPost("delete_recipe")]

        public IActionResult delete_recipe(int id)
        {
            string src = "Data Source=DESKTOP-6R40TAM;Initial Catalog=Recipes;Integrated Security=true;";

            try
            {
                SqlConnection connection = new SqlConnection(src);
                connection.Open();

                string query = "DELETE FROM Recipe WHERE id=" + id;
                SqlCommand cmd = new SqlCommand(query, connection);
                cmd.ExecuteNonQuery();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return new JsonResult(ex.Message);
            }
            return new JsonResult(id);
        }

        [HttpPost("update_recipe")]
        public IActionResult update_recipe(Recipe recipe)
        {
            string src = "Data Source=DESKTOP-6R40TAM;Initial Catalog=Recipes;Integrated Security=true;";

            try
            {
                SqlConnection connection = new SqlConnection(src);
                connection.Open();

                string query = "UPDATE Recipe " +
                    "SET authorName='" + recipe.authorName + "', recipeName='" + recipe.recipeName + "', recipeType='" +
                    recipe.recipeType + "', recipeTime=" + recipe.recipeTime + ", recipeDescription='" +
                    recipe.recipeDescription + "' WHERE id=" + recipe.id;
                SqlCommand cmd = new SqlCommand(query, connection);
                cmd.ExecuteNonQuery();

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return new JsonResult(ex.Message);
            }
            return new JsonResult(recipe);
        }

        [HttpGet("filter_recipes")]

        public List<Recipe> filter_recipes(string type)
        {
            string src = "Data Source=DESKTOP-6R40TAM;Initial Catalog=Recipes;Integrated Security=true;";
            string query = @"SELECT * FROM Recipe WHERE recipeType LIKE '%" + type +"%'";
            List<Recipe> recipes = new List<Recipe>();
            try
            {
                SqlConnection connection = new SqlConnection(src);
                connection.Open();
                SqlCommand cmd = new SqlCommand(query, connection);
                SqlDataReader myReader;
                myReader = cmd.ExecuteReader();
                while (myReader.Read())
                {
                    Recipe recipe = new()
                    {
                        id = myReader.GetInt32("id"),
                        authorName = myReader.GetString("authorName"),
                        recipeName = myReader.GetString("recipeName"),
                        recipeType = myReader.GetString("recipeType"),
                        recipeTime = myReader.GetInt32("recipeTime"),
                        recipeDescription = myReader.GetString("recipeDescription")
                    };
                    recipes.Add(recipe);


                }

                myReader.Close();
                connection.Close();


            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            return recipes;

        }

        [HttpPost("login")]
        public JsonResult login(User user)
        {
            string query = @"SELECT id FROM Users WHERE username = '" + user.username + "' AND password = '" + 
                user.password + "'";

            DataTable tbl = new DataTable();
            string src = "Data Source=DESKTOP-6R40TAM;Initial Catalog=Recipes;Integrated Security=true;";

            int id = -1;

            try
            {
                SqlConnection connection = new SqlConnection(src);
                connection.Open();
                SqlCommand cmd = new SqlCommand(query, connection);
                SqlDataReader myReader;
                myReader = cmd.ExecuteReader();
                if (myReader.HasRows == true)
                {
                    myReader.Read();
                    id = myReader.GetInt32(0);
                }

                myReader.Close();
                connection.Close();
            }
            catch (Exception ex)
            {
                return new JsonResult(ex.Message);
            }

            return new JsonResult(id);

        }



    }
}

