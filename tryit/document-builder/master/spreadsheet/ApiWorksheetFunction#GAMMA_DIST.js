
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.GAMMA_DIST(10, 9, 2, false);
oWorksheet.GetRange("B2").SetValue(ans);
builder.SaveFile("xlsx", "GAMMA_DIST.xlsx");
builder.CloseFile();


