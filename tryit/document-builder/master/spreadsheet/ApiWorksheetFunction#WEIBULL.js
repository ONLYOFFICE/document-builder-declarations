
builder.CreateFile("xlsx");

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var result = oFunction.WEIBULL(12, 2, 5, true);
oWorksheet.GetRange("B2").SetValue(result);

builder.SaveFile("xlsx", "WEIBULL.xlsx");
builder.CloseFile();

