builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.COMPLEX(-2, 2.5, "i"));
builder.SaveFile("xlsx", "COMPLEX.xlsx");
builder.CloseFile();