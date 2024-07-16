builder.CreateFile("xlsx");

const oWorksheet = Api.GetActiveSheet();

oWorksheet.GetRange("A1").SetValue(12);

var logical1 = oWorksheet.GetRange("A1") < 10;
var logical2 = 34 < 10;
var logical3 = 50 < 10;

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.OR(logical1, logical2, logical3);
oWorksheet.GetRange("C1").SetValue(ans);

builder.SaveFile("xlsx", "OR.xlsx");
builder.CloseFile();