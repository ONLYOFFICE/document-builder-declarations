builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oMyNewRunStyle = oDocument.CreateStyle("My New Run Style", "run");
var oTextPr = oMyNewRunStyle.GetTextPr();
oTextPr.SetCaps(true);
oTextPr.SetFontFamily("Calibri Light");
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is just a sample text. ");
oRun.AddText("The text properties are changed and the style is added to the paragraph. ");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.SetStyle(oMyNewRunStyle);
oRun.AddText("This is a text run with its own style.");
oTextPr = oRun.GetTextPr();
oTextPr.SetStrikeout(true);
oParagraph.AddElement(oRun);
oParagraph = Api.CreateParagraph();
var bStrikeout = oTextPr.GetStrikeout();
oParagraph.AddText("Strikeout property: " + bStrikeout);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetStrikeout.docx");
builder.CloseFile();