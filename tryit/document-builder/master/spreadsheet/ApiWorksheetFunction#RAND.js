builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.RAND());
builder.SaveFile("xlsx", "RAND.xlsx");
builder.CloseFile();