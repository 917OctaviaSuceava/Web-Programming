<?php

$conn = mysqli_connect("localhost", "root", "", "recipes");
if($conn == false)
{
    die('Could not connect');
}
$id = $_GET['id'];
$result = mysqli_query($conn, "DELETE FROM Recipe WHERE id='$id'");
if ($result) {
    echo "Recipe was deleted successfully!";
} else {
    echo "Something went wrong.";
}
mysqli_close($conn);
