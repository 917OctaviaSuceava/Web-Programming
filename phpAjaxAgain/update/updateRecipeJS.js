
function updateRecipe() {
    let authorname = document.getElementById("authorname1").value;
    let name = document.getElementById("name1").value;
    let type = document.getElementById("type1").value;
    let time = document.getElementById("time1").value;
    let description = document.getElementById("description1").value;
    let id = document.getElementById("#selected_id").innerText;
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("success_update").innerHTML = this.responseText;
            getAll();
        }
    };
    xhttp.open("GET", "updateRecipePHP.php?id="+id+"&authorname=" + authorname + "&name=" + name + "&type=" + type +
        "&time=" + time + "&description=" + description, true);
    xhttp.send();

}