builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.N(false));
builder.SaveFile("xlsx", "N.xlsx");
builder.CloseFile();