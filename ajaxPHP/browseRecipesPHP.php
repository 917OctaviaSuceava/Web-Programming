<?php

$conn = mysqli_connect("localhost", "root", "", "recipes");
if($conn == false)
{
    die('Could not connect'); // . mysqli_error())
}

$result = mysqli_query($conn, "SELECT * FROM Recipe");

echo "<table style='font-family: Verdana, sans-serif; border: 1px solid black; margin-top:10px; background-color: rgb(143, 171, 191);'> 
        <tr onmouseover='change_color(this, true)' onmouseout='change_color(this, false)' onclick='get_row(this)' style='border: 1px solid black'> 
            <th style='border: 1px solid black'> ID </th> 
            <th style='border: 1px solid black'> Author Name </th> 
            <th style='border: 1px solid black'> Recipe Name </th>
            <th style='border: 1px solid black'> Recipe Type</th>
            <th style='border: 1px solid black'> Time Required </th>
            <th style='border: 1px solid black'> Description </th>
        </tr>";

while($row = mysqli_fetch_array($result)) {
    echo "<tr onmouseover='change_color(this, true)' onmouseout='change_color(this, false)' onclick='get_row(this)' style='border: 1px solid black'>";
    echo "<td style='border: 1px solid black'>" . $row['id'] . "</td>";
    echo "<td style='border: 1px solid black'>" . $row['authorName'] . "</td>";
    echo "<td style='border: 1px solid black'>" . $row['recipeName'] . "</td>";
    echo "<td style='border: 1px solid black'>" . $row['recipeType'] . "</td>";
    echo "<td style='border: 1px solid black'>" . $row['recipeTime'] . "</td>";
    echo "<td style='border: 1px solid black'>" . $row['recipeDescription'] . "</td>";
    echo "</tr>";
}
echo "</table>";
mysqli_close($conn);
