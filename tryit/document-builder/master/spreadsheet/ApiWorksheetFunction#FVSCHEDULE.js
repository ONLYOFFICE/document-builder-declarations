builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue("Principal");
oWorksheet.GetRange("B1").SetValue(100);
oWorksheet.GetRange("A2").SetValue("Rate 1");
oWorksheet.GetRange("B2").SetValue(0.03);
oWorksheet.GetRange("A3").SetValue("Rate 2");
oWorksheet.GetRange("B3").SetValue(0.05);
oWorksheet.GetRange("A4").SetValue("Rate 3");
oWorksheet.GetRange("B4").SetValue(0.1);
var oRange = oWorksheet.GetRange("B2:B4");
oWorksheet.GetRange("B5").SetValue(oFunction.FVSCHEDULE(100, oRange));
builder.SaveFile("xlsx", "FVSCHEDULE.xlsx");
builder.CloseFile();