builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.AMORLINC(3500, "1/1/2018", "3/1/2018", 500, 1, 0.25, 1));
builder.SaveFile("xlsx", "AMORLINC.xlsx");
builder.CloseFile();