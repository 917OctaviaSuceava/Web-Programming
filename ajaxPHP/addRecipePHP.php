<?php

$authorname = $_GET['authorname'];
$name = $_GET['name'];
$type = $_GET['type'];
$time = $_GET['time'];
$description = $_GET['description'];

$sql_query = "INSERT INTO Recipe(authorName, recipeName, recipeType, recipeTime, recipeDescription) VALUES 
                                                                     ('$authorname', '$name', 
                                                                      '$type', '$time', '$description')";

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
    echo "The recipe was added successfully";
}
mysqli_close($conn);