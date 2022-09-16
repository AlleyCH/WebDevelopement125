function prompting() {
    var rows = window.prompt("How many rows would you like?");
    var cols = window.prompt("How many columns would you like?");

    var table = '';

    for (var row = 0; row < rows; row++) {
        table += '<tr>';

        for (var col = 0; col < cols; col++) {
            table += '<td>' + col + '</td>';
        }

        table += '</tr>';
    }

    document.write("<table border='2'; style='margin:auto; font-size:x-large; color: white; background-color: black'>" + table + '</table>' + '<p id ="Thanks" style= "font-size: x-large">' + "Thanks Mate! ☺ Refresh To Make Another Table" + "</p>" )
    
}
