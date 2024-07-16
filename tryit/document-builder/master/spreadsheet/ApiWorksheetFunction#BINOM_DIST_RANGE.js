builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.BINOM_DIST_RANGE(60, 0.75, 45, 50));
builder.SaveFile("xlsx", "BINOM_DIST_RANGE.xlsx");
builder.CloseFile();