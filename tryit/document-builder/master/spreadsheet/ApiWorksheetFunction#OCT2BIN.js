builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.OCT2BIN(7777777634));
builder.SaveFile("xlsx", "OCT2BIN.xlsx");
builder.CloseFile();