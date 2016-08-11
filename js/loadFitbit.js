
var ds = new Miso.Dataset({
  importer : Miso.Dataset.Importers.GoogleSpreadsheet,
  parser : Miso.Dataset.Parsers.GoogleSpreadsheet,
  key : "1r0goQZW-Y5qMRt1crS9t9BUXqRwfshT5DQhdU3UCZjk",
  worksheet : "1"
});

ds.fetch({
  success : function() {
    //console.log(ds.columnNames());
    //console.log(ds.rowByPosition(1));
    //console.log(ds.rowByPosition(2));
    //console.log(ds.rowByPosition(3));
    
    
    
    var myTable= "<table><tr class='firstRow'><td class='firstColumn'>date</td>";
    myTable+= "<td>steps</td>";
    myTable+="<td class='lastColumn'>miles</td></tr>";

    for (var x=0; x<=2;x++) {
        var rowDataArray = JSON.stringify(ds.rowByPosition(x)).split('"');//Grabs the row from the Dataset, converts to string, then splits it to a string array using " as the break
        var date = rowDataArray[5];
        var steps = rowDataArray[8].slice(1,rowDataArray[8].length-1);//removes leading colon from steps string
        var distance = rowDataArray[10].slice(1,rowDataArray[10].length-1);//removes leading colon from distance string
        
        myTable+="<tr><td class='firstColumn'>" + date + "</td>";
        myTable+="<td>" + steps + "</td>";
        myTable+="<td class='lastColumn'>" + distance + "</td></tr>";
    }
    myTable+="</table>";
    document.getElementById('fitbitdiv').innerHTML = myTable;
    
  

    //document.getElementById("stringTest").innerHTML=x[6]
    },
  error : function() {
    console.log("?");
  }
});
