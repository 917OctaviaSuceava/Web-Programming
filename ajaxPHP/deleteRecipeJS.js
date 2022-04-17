function deleteRecipe() {
    let xhttp = new XMLHttpRequest();
    let id = document.getElementById("#selected_id").innerText;
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            getAll();
            //document.getElementById("#all_recipes").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "deleteRecipePHP.php?id="+id, true);
    xhttp.send();
}


function change_color(tableRow, highLight)
{
    if (highLight) {
        tableRow.style.backgroundColor = '#dcfac9';
    }
    else {
        tableRow.style.backgroundColor = 'rgb(143, 171, 191)';
    }
}

function get_row(tableRow){
    let columns = tableRow.querySelectorAll("td");
    document.getElementById("success_update").innerHTML = "";
    document.getElementById("#selected_id").innerHTML = columns[0].innerHTML;
    document.getElementById("authorname1").value = columns[1].innerHTML;
    document.getElementById("name1").value = columns[2].innerHTML;
    document.getElementById("type1").value = columns[3].innerHTML;
    document.getElementById("time1").value = columns[4].innerHTML;
    document.getElementById("description1").value = columns[5].innerHTML;

}