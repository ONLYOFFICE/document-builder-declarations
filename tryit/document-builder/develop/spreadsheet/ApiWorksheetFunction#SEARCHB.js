builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.SEARCHB("line", "Online Office"));
builder.SaveFile("xlsx", "SEARCHB.xlsx");
builder.CloseFile();