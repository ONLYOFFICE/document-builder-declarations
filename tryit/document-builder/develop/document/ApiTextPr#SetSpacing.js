builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTextPr = oDocument.GetDefaultTextPr();
oTextPr.SetSpacing(80);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("A sample text with the spacing set to 4 points (80 twentieths of a point).");
builder.SaveFile("docx", "SetSpacing.docx");
builder.CloseFile();
