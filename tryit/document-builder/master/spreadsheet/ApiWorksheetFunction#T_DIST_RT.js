builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.T_DIST_RT(1.5, 10));
builder.SaveFile("xlsx", "T_DIST_RT.xlsx");
builder.CloseFile();