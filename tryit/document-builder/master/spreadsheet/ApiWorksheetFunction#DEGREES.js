builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.DEGREES(1.5));
builder.SaveFile("xlsx", "DEGREES.xlsx");
builder.CloseFile();