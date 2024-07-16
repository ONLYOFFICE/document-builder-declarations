builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.IPMT(0.1/12, 1, 2*12, 2000, 0));
builder.SaveFile("xlsx", "IPMT.xlsx");
builder.CloseFile();