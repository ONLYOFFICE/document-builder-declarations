builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.CUMIPMT(0.1/12, 2*12, 2000, 1, 24, 0));
builder.SaveFile("xlsx", "CUMIPMT.xlsx");
builder.CloseFile();