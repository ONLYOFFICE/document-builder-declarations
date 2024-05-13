builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oPictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo"});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oPictureForm);
oPictureForm.SetImage("https://api.onlyoffice.com/content/img/docbuilder/examples/user-profile.png");
oPictureForm.SetLockAspectRatio(true);
oPictureForm.SetScaleFlag("tooBig");
oPictureForm.SetPicturePosition(70, 70);
oPictureForm.SetRespectBorders(true);
var sScaleFlag = oPictureForm.GetScaleFlag();
var aPosition = oPictureForm.GetPicturePosition();
var bLock = oPictureForm.IsLockAspectRatio();
var bRespectBorders = oPictureForm.IsRespectBorders();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Picture scale flag: " + sScaleFlag);
oParagraph.AddLineBreak();
oParagraph.AddText("The aspect ratio of the first picture form in this document is locked: " + bLock);
oParagraph.AddLineBreak();
oParagraph.AddText("The borders of the first picture form in this document are respected when scaling the image: " + bRespectBorders);
oDocument.Push(oParagraph);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Picture position: ");
oParagraph.AddLineBreak();
for (let i = 0; i < aPosition.length; i++ ){
    var nShift = aPosition[i];
    oParagraph.AddText("" + nShift);
    oParagraph.AddLineBreak();
}
oDocument.Push(oParagraph);
builder.SaveFile("docx", "ApiPictureForm.docx");
builder.CloseFile();