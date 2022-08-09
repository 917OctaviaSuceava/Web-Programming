function getAll() {
    document.getElementById("#buttons").style.display = "block";
    document.getElementById("#update_form").style.display = "block";
    document.getElementById("success_update").innerHTML = "";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("#all_recipes").innerHTML = this.responseText;
        }
    };
    xhttp.open("POST", "browseRecipesPHP.php", true);
    xhttp.send();
}
