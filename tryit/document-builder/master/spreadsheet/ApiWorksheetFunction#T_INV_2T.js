builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.T_INV_2T(0.5, 10));
builder.SaveFile("xlsx", "T_INV_2T.xlsx");
builder.CloseFile();