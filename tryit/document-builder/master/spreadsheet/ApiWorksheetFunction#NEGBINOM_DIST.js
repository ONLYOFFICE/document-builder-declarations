builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.NEGBINOM_DIST(6, 32, 0.7, true));
builder.SaveFile("xlsx", "NEGBINOM_DIST.xlsx");
builder.CloseFile();