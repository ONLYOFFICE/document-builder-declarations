builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.REPLACEB("Online Office", 8, 6, "portal"));
builder.SaveFile("xlsx", "REPLACEB.xlsx");
builder.CloseFile();