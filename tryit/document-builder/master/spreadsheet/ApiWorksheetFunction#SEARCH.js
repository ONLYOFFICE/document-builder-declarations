builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.SEARCH("line", "Online Office"));
builder.SaveFile("xlsx", "SEARCH.xlsx");
builder.CloseFile();