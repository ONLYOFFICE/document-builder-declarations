
builder.CreateFile("xlsx");

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var result = oFunction.VAR_P(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16)
oWorksheet.GetRange("B2").SetValue(result);

builder.SaveFile("xlsx", "VAR_P.xlsx");
builder.CloseFile();

