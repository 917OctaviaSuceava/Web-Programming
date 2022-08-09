function getAllPagination() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("#filter_all").innerHTML = this.responseText;
        }
    };
    xhttp.open("POST", "browseWithPagination.php", true);
    xhttp.send();
}


$(document).ready(
    $("#filter_all_btn").click(
        function (event){
            event.preventDefault();
            $.post(
                "browseWithPagination.php",
                {},
                function (info){
                    $("#filter_all").html(
                        info);
                }
            )
        }
    )
);