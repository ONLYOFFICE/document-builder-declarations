builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.");
oWorksheet.GetRange("A3").SetValue("Comment's author: " + oComment.GetAuthorName());
builder.SaveFile("xlsx", "GetAuthorName.xlsx");
builder.CloseFile();