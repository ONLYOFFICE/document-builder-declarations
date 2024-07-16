builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ATAN(0.25));
builder.SaveFile("xlsx", "ATAN.xlsx");
builder.CloseFile();