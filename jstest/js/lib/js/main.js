document.write("asd");

var ds = new Miso.Dataset({
  importer : Miso.Dataset.Importers.GoogleSpreadsheet,
  parser : Miso.Dataset.Parsers.GoogleSpreadsheet,
  key : "1r0goQZW-Y5qMRt1crS9t9BUXqRwfshT5DQhdU3UCZjk",
  worksheet : "1"
});

ds.fetch({ 
  success : function() {
    log(ds.columnNames());
    document.write("test");
    },
  error : function() {
    log("Are you sure you are connected to the internet?");
    document.write("test2");
  }
});
