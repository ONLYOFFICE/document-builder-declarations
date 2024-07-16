builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.CONFIDENCE_NORM(0.5, 57, 8);
oWorksheet.GetRange("B2").SetValue(ans);
builder.SaveFile("xlsx", "CONFIDENCE_NORM.xlsx");
builder.CloseFile();