$(function(){

    let move_right = 0;
    let list_item = $("li");
    let count = 0;

    list_item.each(function() {
        $(this).css("left", move_right);
        //let width = $(this).children().eq(count).width;
        //let width = $(this).children('img')[count].width();
        move_right += 200;
        //count++;
    });


    let background_large_img = document.getElementById("background");
    let large_img = document.getElementById("large-img");

    function clicked(){
        let image_source = $(this).attr("src");
        background_large_img.style.display = "block";
        large_img.src = image_source;
        list_item.clearQueue();
        list_item.stop();
    }

    $("img").on("click", clicked);

    large_img.onclick = function() {
        background_large_img.style.display = "none";
        move();
    }

    function move() {
        list_item.animate({ left: "+=5px"}, 30, complete);
    }

    function complete()
    {
        let left = $(this).parent().offset().left + $(this).offset().left;
        if (left >= 1600) {
            $(this).css("left", left - 1600);
        }
        move();
    }


    move();



});


