builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.SEC(0.785398));
builder.SaveFile("xlsx", "SEC.xlsx");
builder.CloseFile();