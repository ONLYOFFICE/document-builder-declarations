builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.DDB(3500, 500, 5, 1, 2));
builder.SaveFile("xlsx", "DDB.xlsx");
builder.CloseFile();