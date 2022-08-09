<?php

$id = $_GET['id'];
$authorname = $_GET['authorname'];
$name = $_GET['name'];
$type = $_GET['type'];
$time = $_GET['time'];
$description = $_GET['description'];

$sql_query = "UPDATE Recipe
              SET authorName = '$authorname', recipeName = '$name', recipeType = '$type', recipeTime = '$time', 
                  recipeDescription = '$description'
              WHERE id='$id'";

$conn = mysqli_connect("localhost", "root", "", "recipes");
if($conn == false)
{
    die('Could not connect');
}
$result = mysqli_query($conn, $sql_query);
if ($result==false)
{
    echo "Something went wrong!";
}
else {
    echo "The recipe was updated successfully!";
}
mysqli_close($conn);