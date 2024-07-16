builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.IMSQRT("-2+2.5i"));
builder.SaveFile("xlsx", "IMSQRT.xlsx");
builder.CloseFile();