builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ISNA("#N/A"));
oWorksheet.GetRange("A2").SetValue(oFunction.ISNA(255));
oWorksheet.GetRange("A3").SetValue(oFunction.ISNA("www.example.com"));
builder.SaveFile("xlsx", "ISNA.xlsx");
builder.CloseFile();