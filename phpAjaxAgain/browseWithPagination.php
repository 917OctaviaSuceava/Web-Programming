<?php

$conn = mysqli_connect("localhost", "root", "", "recipes");
if($conn == false)
{
    die('Could not connect');
}


echo "<table style='font-family: Verdana, sans-serif; border: 1px solid black; margin-top:10px; background-color: rgb(143, 171, 191);'> 
        <tr onmouseover='change_color(this, true)' onmouseout='change_color(this, false)' onclick='get_row(this)' style='border: 1px solid black'> 
            <th style='border: 1px solid black'> ID </th> 
            <th style='border: 1px solid black'> Author Name </th> 
            <th style='border: 1px solid black'> Recipe Name </th>
            <th style='border: 1px solid black'> Recipe Type</th>
            <th style='border: 1px solid black'> Time Required </th>
            <th style='border: 1px solid black'> Description </th>
        </tr>";

function get_current_page($total_pages)
{
    if (isset($_GET['current_page']) && is_numeric($_GET['current_page'])){
        $current_page = (int) $_GET['current_page'];
    }   else $current_page = 1;

    if ($current_page > $total_pages)
        $current_page = $total_pages;

    if ($current_page < 1)
        $current_page = 1;

    return $current_page;
}


function showLinksInRange($current_page, $total_pages, $range){
    for ($x = ($current_page - $range); $x < (($current_page + $range) + 1); $x++) {
        // it's a valid page number...
        if (($x > 0) && ($x <= $total_pages)) {
            // on current page...
            if ($x == $current_page) {
                // 'highlight' it but don't make a link
                /*echo "<p style='border: 1px white; border-radius: 4px'>
                        $x
                      </p>";*/
                echo " [<a>$x</a>] ";
                // if not current page...
            } else {
                // make it a link
                echo " <a href='{$_SERVER['PHP_SELF']}?currentpage=$x'>$x</a> ";
            }
        }
    }
}

function skipBackwardLinksForFirstPage($current_page){
    if ($current_page > 1) {
        // show << link to go back to page 1
        echo " <a href='{$_SERVER['PHP_SELF']}?currentpage=1'><<</a> ";
        // get previous page num
        $previous_page = $current_page - 1;
        // show < link to go back to 1 page
        echo " <a href='{$_SERVER['PHP_SELF']}?currentpage=$previous_page'><</a> ";
    }
}


function skipForwardLinksForLastPage($current_page, $total_pages){
    // if not on last page, show forward and last page links
    if ($current_page != $total_pages) {
        // get next page
        $next_page = $current_page + 1;
        // echo forward link for next page
        echo " <a href='{$_SERVER['PHP_SELF']}?currentpage=$next_page'>></a> ";
        // echo forward link for last page
        echo " <a href='{$_SERVER['PHP_SELF']}?currentpage=$total_pages'>>></a> ";
    }
}

$select = "SELECT * FROM Recipe";
$count = "SELECT COUNT(*) FROM Recipe";
$count_result = mysqli_query($conn, $count);
$number_of_recipes = mysqli_fetch_row($count_result)[0];
$recipes_per_page = 4;
$total_pages = ceil($number_of_recipes/$recipes_per_page);

$current_page = get_current_page($total_pages);
$offset = ($current_page - 1) * $recipes_per_page;

$select_recipes_limit = $select . " LIMIT $offset, $recipes_per_page";
$select_result = mysqli_query($conn, $select_recipes_limit);

if (mysqli_num_rows($select_result) > 0){
    while ($row = mysqli_fetch_assoc($select_result)){
        echo "<tr onmouseover='change_color(this, true)' onmouseout='change_color(this, false)' onclick='get_row(this)' style='border: 1px solid black'>";
        echo "<td style='border: 1px solid black'>" . $row['id'] . "</td>";
        echo "<td style='border: 1px solid black'>" . $row['authorName'] . "</td>";
        echo "<td style='border: 1px solid black'>" . $row['recipeName'] . "</td>";
        echo "<td style='border: 1px solid black'>" . $row['recipeType'] . "</td>";
        echo "<td style='border: 1px solid black'>" . $row['recipeTime'] . "</td>";
        echo "<td style='border: 1px solid black'>" . $row['recipeDescription'] . "</td>";
        echo "</tr>";
    }
} else echo "No recipes in the database!";
$rangeToShowLinks = 2;

skipBackwardLinksForFirstPage($current_page);

showLinksInRange($current_page, $total_pages, $rangeToShowLinks);

skipForwardLinksForLastPage($current_page, $total_pages);
mysqli_close($conn);
