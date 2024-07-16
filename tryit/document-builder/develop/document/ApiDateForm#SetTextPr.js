builder.CreateFile("pdf");
var oDocument = Api.GetDocument();
var oDateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Date", "format": "mm.dd.yyyy", "lang": "en-US"});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oDateForm);
var oTextPr = Api.CreateTextPr();
oTextPr.SetFontSize(30);
oTextPr.SetBold(true);
oDateForm.SetTextPr(oTextPr);
builder.SaveFile("pdf", "SetTextPr.pdf");
builder.CloseFile();