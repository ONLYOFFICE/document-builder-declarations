builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.BINOMDIST(50, 67, 0.45, false));
builder.SaveFile("xlsx", "BINOMDIST.xlsx");
builder.CloseFile();