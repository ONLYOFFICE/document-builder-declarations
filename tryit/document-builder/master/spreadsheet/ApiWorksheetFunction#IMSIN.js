builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.IMSIN("-2+2.5i"));
builder.SaveFile("xlsx", "IMSIN.xlsx");
builder.CloseFile();