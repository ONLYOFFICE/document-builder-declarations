builder.CreateFile("xlsx");

const oWorksheet = Api.GetActiveSheet();

var condition = 12 < 100;
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.NOT(condition);

oWorksheet.GetRange("C1").SetValue(ans);

builder.SaveFile("xlsx", "NOT.xlsx");
builder.CloseFile();