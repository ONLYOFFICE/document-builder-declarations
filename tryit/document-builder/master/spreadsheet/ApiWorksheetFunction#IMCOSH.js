builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.IMCOSH("-2+2.5i"));
builder.SaveFile("xlsx", "IMCOSH.xlsx");
builder.CloseFile();