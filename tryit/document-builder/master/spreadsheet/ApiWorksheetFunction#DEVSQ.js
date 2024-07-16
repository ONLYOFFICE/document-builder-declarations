builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var argumentsArrA = [34, 244];
var argumentsArrB = [769, 445];
var argumentsArrC = [76, 677];
var argumentsArrD = [89, 56];
var argumentsArrE = [98, 13];

// Place the numbers in cells
for (var a = 0; a < argumentsArrA.length; a++) {
    oWorksheet.GetRange("A" + (a + 1)).SetValue(argumentsArrA[a]);
}
for (var b = 0; b < argumentsArrB.length; b++) {
    oWorksheet.GetRange("B" + (b + 1)).SetValue(argumentsArrB[b]);
}
for (var c = 0; c < argumentsArrC.length; c++) {
    oWorksheet.GetRange("C" + (c + 1)).SetValue(argumentsArrC[c]);
}
for (var d = 0; d < argumentsArrD.length; d++) {
    oWorksheet.GetRange("D" + (d + 1)).SetValue(argumentsArrD[d]);
}
for (var e = 0; e < argumentsArrE.length; e++) {
    oWorksheet.GetRange("E" + (e + 1)).SetValue(argumentsArrE[e]);
}

// Analyze the range of data 
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.DEVSQ(oWorksheet.GetRange("A1:E2"));
oWorksheet.GetRange("E3").SetValue(ans);
builder.SaveFile("xlsx", "DEVSQ.xlsx");
builder.CloseFile();