builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is the first paragraph. We will add a thin orange border below it.");
oParagraph.SetBottomBorder("single", 8, 0, 255, 111, 61);
builder.SaveFile("docx", "SetBottomBorder.docx");
builder.CloseFile();
