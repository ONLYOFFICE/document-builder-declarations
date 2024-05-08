builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("A watermark was inserted into this document.");
oDocument.InsertWatermark("Watermark", true);
var oSettings = oDocument.GetWatermarkSettings();
var oTextPr = oSettings.GetTextPr();
oTextPr.SetFontSize(192);
oTextPr.SetItalic(true);
oTextPr.SetColor(255, 111, 6, false);
oTextPr.SetCaps(true);
oTextPr.SetSpacing(80);
oSettings.SetTextPr(oTextPr);
oDocument.SetWatermarkSettings(oSettings);
builder.SaveFile("docx", "SetTextPr.docx");
builder.CloseFile();