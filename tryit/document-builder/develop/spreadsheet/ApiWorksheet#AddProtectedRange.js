builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
oWorksheet.GetRange("C1").SetValue("3");
oWorksheet.AddProtectedRange("Protected range", "A1:C1");
builder.SaveFile("xlsx", "AddProtectedRange.xlsx");
builder.CloseFile();