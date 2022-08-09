
function addRecipe() {
    let authorname = document.getElementById("authorname").value;
    let name = document.getElementById("name").value;
    let type = document.getElementById("type").value;
    let time = document.getElementById("time").value;
    let description = document.getElementById("description").value;
    console.log(description);
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("#status").innerHTML = this.responseText;
            getAll();
        }
    };
    xhttp.open("GET", "addRecipePHP.php?authorname="+authorname+"&name="+name+"&type="+type+
        "&time="+time+"&description="+description, true);
    xhttp.send();
    /*
    let allData = 'authorName=' + authorName + '&recipeName=' + recipeName + '&recipeType=' + recipeType + '&recipeTime=' + recipeTime
        + '&recipeDescription=' + recipeDescription;

    $.ajax({
        method: "POST",
        url: "C:\\Users\\Octavia\\PhpstormProjects\\untitled\\addRecipePHP.php",
        data: 'authorName=' + authorName + '&recipeName=' + recipeName + '&recipeType=' + recipeType + '&recipeTime=' + recipeTime
            + '&recipeDescription=' + recipeDescription
    })
        .done(function( msg ) {
            alert( "Data Saved: " + msg );
        });

    //$.ajax('addRecipePHP.php', {type: 'POST', data: allData});

    done: function (data) {
            $("#status").html(data);
            $('authorname').val('');
            $('name').val('');
            $('type').val('');
            $('time').val('');
            $('description').val('');
        },
        fail: function (jqXHR, status, errorThrown) {
            //if fail show error and server status
            $("#status").html('Error occurred: ' + errorThrown + ' with status ' + status);
        }
    $.ajax( "addRecipePHP.php" )
        .type("POST")
        .data(allData)
        .done(function() {
            alert( "success" );
        })
        .fail(function() {
            alert( "error" );
        })
        .always(function() {
            alert( "complete" );
        });*/
}