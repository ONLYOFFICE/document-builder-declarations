builder.CreateFile("pdf");
var oDocument = Api.GetDocument();
var oDateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Date", "format": "mm.dd.yyyy", "lang": "en-US"});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oDateForm);
oDateForm.SetFormat("mm/dd/yyyy");
builder.SaveFile("pdf", "SetFormat.pdf");
builder.CloseFile();