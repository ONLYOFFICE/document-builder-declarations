builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.IMSEC("-2+2.5i"));
builder.SaveFile("xlsx", "IMSEC.xlsx");
builder.CloseFile();