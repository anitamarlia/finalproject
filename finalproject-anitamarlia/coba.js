function lookingFor(){
    var input, edit, table, row, colomn, cell, i, j;
    input = document.getElementById("cari");
    edit = input.value.toUpperCase();
    for(i = 1; i < row.length; i++){
        input[i].style.display = "none";
            if(cell){
                if(cell.innerHTML.toUpperCase().indexOf(edit) > -1){
                    row[i].style.display = "";
                    break;
                }
            }
    }
}