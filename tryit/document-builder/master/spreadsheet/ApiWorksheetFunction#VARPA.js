
builder.CreateFile("xlsx");

var oWorksheet = Api.GetActiveSheet();

// Data array
var data = [
    [1, 0, 0, false],
    ["text", 1, 0, 0],
    [2, 3, true, 7],
    [6, 8, 10, 12]
];

// Place the data in cells A1:D4
for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].length; j++) {
        oWorksheet.GetRangeByNumber(i, j).SetValue(data[i][j]);
    }
}

// Calculate the VARPA of the range A1:D4 and place the result in cell D5
var oFunction = Api.GetWorksheetFunction();
var varpaResult = oFunction.VARPA(oWorksheet.GetRange("A1:D4"));
oWorksheet.GetRange("D5").SetValue(varpaResult);


builder.SaveFile("xlsx", "VARPA.xlsx");
builder.CloseFile();

