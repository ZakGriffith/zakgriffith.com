document.write("asd");

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
    var rowOne = ds.rowByPosition(1);
    
    var st = JSON.stringify(rowOne);
    console.log(typeof st)
    
    var x = st.split('"');
    
    var steps = x[8].slice(1,x[8].length-1);
    var distance = x[10].slice(1,x[10].length-1);
    console.log(x[5])
    console.log(steps)
    console.log(distance)
    
    
    var arrayLength = x.length;
    var theTable = document.createElement('table');

    // Note, don't forget the var keyword!
    for (var i = 0, tr, td; i < arrayLength; i++) {
        tr = document.createElement('tr');
        td = document.createElement('td');
        td.appendChild(document.createTextNode(x[i]));
        tr.appendChild(td);
        theTable.appendChild(tr);
    }

    document.getElementById('table').appendChild(theTable);

    //document.getElementById("stringTest").innerHTML=x[6]
    },
  error : function() {
    console.log("Are you sure you are connected to the internet?");
  }
});
