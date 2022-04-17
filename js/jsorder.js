
let div = document.createElement("div");
div.id = "intro";
div.innerHTML = "<p>Write a javascript which sorts in ascending order an array of numbers which are introduced by the " +
    "user in a \'textarea\' tag or \"input type=text\" tag. The sorted array (which can have any length) will be " +
    "displayed in a table with 5 columns and n/5 lines where n is the length of the array.</p>"
document.body.appendChild(div);

let form = document.createElement("form");
form.id = "text-area";
let input = document.createElement("input");
input.setAttribute("type", "text");
input.id = "array";
form.appendChild(input);
div.appendChild(form);

let btn = document.createElement("button");
let btn_text = document.createTextNode("SORT");
btn.appendChild(btn_text);
btn.onclick = function(){sortArray()};
document.body.appendChild(btn);

let p1 = document.createElement("p");
p1.id = "sorted";
p1.innerText = " ";
document.body.appendChild(p1);

function sortArray() {
    let arr = document.getElementById("array").value;
    let result = arr.split(" ").map(Number);
    result.sort(function(a, b){ return a - b });
    //document.getElementById("sorted").innerHTML = result.toString();

    let table = document.createElement("table");
    let table_body = document.createElement("tbody");
    table.appendChild(table_body);
    document.body.appendChild(table);
    let position = 0;
    let size = result.length;
    for(let index_row = 0; index_row <= size/5 && position < size; index_row++)
    {
        let row = document.createElement("tr");
        for(let index_column = 0; index_column < 5 && position < size; index_column++)
        {
            let data_row = document.createElement("td");
            data_row.innerHTML = result[position].toString();
            position++;
            row.appendChild(data_row);
        }
        table_body.appendChild(row);
    }
}
