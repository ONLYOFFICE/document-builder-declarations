
builder.CreateFile("xlsx");

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var result = oFunction.T_INV(0.75, 2);
oWorksheet.GetRange("B2").SetValue(result);

builder.SaveFile("xlsx", "T_INV.xlsx");
builder.CloseFile();

