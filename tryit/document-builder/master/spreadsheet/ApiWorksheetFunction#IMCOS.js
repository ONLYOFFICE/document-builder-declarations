builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.IMCOS("-2+2.5i"));
builder.SaveFile("xlsx", "IMCOS.xlsx");
builder.CloseFile();