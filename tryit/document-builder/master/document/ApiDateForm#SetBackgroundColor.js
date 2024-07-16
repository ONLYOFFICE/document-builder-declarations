builder.CreateFile("pdf");
var oDocument = Api.GetDocument();
var oDateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Date", "format": "mm.dd.yyyy", "lang": "en-US"});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oDateForm);
oDateForm.SetBackgroundColor(255, 111, 61);
builder.SaveFile("pdf", "SetBackgroundColor.pdf");
builder.CloseFile();