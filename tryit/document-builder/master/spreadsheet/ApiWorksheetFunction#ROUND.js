builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ROUND(3.456, 2));
builder.SaveFile("xlsx", "ROUND.xlsx");
builder.CloseFile();