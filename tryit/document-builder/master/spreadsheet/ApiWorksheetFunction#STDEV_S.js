builder.CreateFile("xlsx");
const oWorksheet = Api.GetActiveSheet();

var valueArr = [3, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 1, 13, 14];

// Place the numbers in cells
for (var i = 0; i < valueArr.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.STDEV_S(3, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 1, 13, 14); //ignores logical values and text

oWorksheet.GetRange("C1").SetValue(ans);

builder.SaveFile("xlsx", "STDEV_S.xlsx");
builder.CloseFile();