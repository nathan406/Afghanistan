
function updateTable(selectedOption) {
    var table = document.getElementById("myTable");
    var rows = table.getElementsByTagName("tr");
    for (var i = 1; i < rows.length; i++) {
    rows[i].style.display = (i <= selectedOption) ? "table-row" : "none";
    }
}
                  