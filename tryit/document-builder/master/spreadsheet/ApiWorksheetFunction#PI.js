builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.PI());
builder.SaveFile("xlsx", "PI.xlsx");
builder.CloseFile();