function getAllFilter() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("#filter_all").innerHTML = this.responseText;
        }
    };
    xhttp.open("POST", "browseRecipesPHP.php", true);
    xhttp.send();
}

function getByType() {
    let type = document.getElementById("filter_type").value;
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("#filter_all").innerHTML = this.responseText;
        }
    };
    xhttp.open("POST", "filterRecipesPHP.php?type="+type, true);
    xhttp.send();
}

