document.addEventListener('DOMContentLoaded', function() {
    var count = 0;
    document.getElementById("create").addEventListener("click", generateTable);

    function generateTable () {
        if (count > 0) {  // remove table if it exists
            removeTable();
        };

        count++;

        let div = document.createElement('div');
        div.classList.add('box');
        document.body.appendChild(div);

        var table = document.createElement("table");
        document.body.appendChild(table);

        div.appendChild(table);

        var xBegin = parseInt(document.getElementById("cfrom").value);
        var xEnd = parseInt(document.getElementById("cto").value);
        var yBegin = parseInt(document.getElementById("rfrom").value);
        var yEnd = parseInt(document.getElementById("rto").value);

        generateRows(xBegin, xEnd, yBegin, yEnd);

        function generateRows (xBegin, xEnd, yBegin, yEnd) {
            for (var i = yBegin-1; i < yEnd+1; i++) { // create and go through each <tr> tag
                var r = document.createElement("tr");
                var row = table.appendChild(r);

                for (var j = xBegin-1; j < xEnd+1; j++) { // create and go through each <td> tag
                    var d = document.createElement("td");
                    //added .style for simplicity sake
                    if(i==yBegin-1 && j==xBegin-1) {
                        var cellVal = "";
                        d.textContent = cellVal;
                        d.style.backgroundColor = "slateBlue";
                        d.style.color = "white";
                        d.style.position = "sticky"
                        d.style.top = "0";
                    }
                    else if(j==xBegin-1) {
                        var cellVal = i;
                        d.textContent = cellVal;
                        d.style.backgroundColor = "slateBlue";
                        d.style.color = "white";
                        d.style.position = "sticky"
                        d.style.left = "0";
                    }
                    else if(i==yBegin-1) {
                        var cellVal = j;
                        d.textContent = cellVal;
                        d.style.backgroundColor = "slateBlue";
                        d.style.color = "white";
                        d.style.position = "sticky"
                        d.style.top = "0";
                    }
                    else {
                        var cellVal = i*j;
                        d.textContent = cellVal;
                    }
                    row.appendChild(d);  // create <td>s inside each <tr>
                }
            }
        }
    }

    function removeTable () {
        var parent = document.body;
        var child = document.getElementsByClassName("box")[0];
        parent.removeChild(child);
    }

    
});

$(document).ready(function() {
    $('form[id="formInput"]').validate({
        rules: {
            rfrom: {
                number: true,
                min: -100,
                max: 100,
                required: true
            },
            rto: {
                number: true,
                min: -100,
                max: 100,
                required: true
            },
            cfrom: {
                number: true,
                min: -100,
                max: 100,
                required: true
            },
            cto: {
                number: true,
                min: -100,
                max: 100,
                required: true
            }
        },
    
        messages: {
            rfrom: {
                number: " you did not enter a valid number.<br/>Enter a number between -100 and 100 for 'row from' value.",
                min: " number entered is too small.<br/>Enter a number greater than or equal to -100 for 'row from' value.",
                max: " number entered is too big.<br/>Enter a number less than or equal to 100 for 'row from' value.",
                required: " you did not enter any number.<br/>Enter a number between -100 and 100 for 'row from' value."
            },
            rto: {
                number: " you did not enter a valid number.<br/>Enter a number between -100 and 100 for 'row to' value.",
                min: " number entered is too small.<br/>Enter a number greater than or equal to -100 for 'row to' value.",
                max: " number entered is too big.<br/>Enter a number less than or equal to 100 for 'row to' value.",
                required: " you did not enter any number.<br/>Enter a number between -100 and 100 for 'row to' value."
            },
            cfrom: {
                number: " you did not enter a valid number.<br/>Enter a number between -100 and 100 for 'column from' value.",
                min: " number entered is too small.<br/>Enter a number greater than or equal to -100 for 'column from' value.",
                max: " number entered is too big.<br/>Enter a number less than or equal to 100 for 'column from' value.",
                required: " you did not enter any number.<br/>Enter a number between -100 and 100 for 'column from' value."
            },
            cto: {
                number: " you did not enter a valid number.<br/>Enter a number between -100 and 100 for 'column to' value.",
                min: " number entered is too small.<br/>Enter a number greater than or equal to -100 for 'column to' value.",
                max: " number entered is too big.<br/>Enter a number less than or equal to 100 for 'column to' value.",
                required: " you did not enter any number.<br/>Enter a number between -100 and 100 for 'column to' value."
            }
        },
    });

    $("#formInput").on('keyup blur', function(){
        $("#formInput").validate().checkForm();
    });
});