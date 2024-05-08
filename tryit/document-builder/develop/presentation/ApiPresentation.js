builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
oPresentation.SetSizes(254 * 36000, 190 * 36000);
var oSlide1 = oPresentation.GetCurrentSlide();
oSlide1.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 200 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.AddText("This is just a sample text.");
oPresentation.CreateNewHistoryPoint();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("New history point was just created.");
oParagraph.AddLineBreak();
var sClassType = oPresentation.GetClassType();
oParagraph.AddText("Class Type = " + sClassType);
var nCurrentSlideIndex = oPresentation.GetCurSlideIndex();
oParagraph.AddLineBreak();
oParagraph.AddText("Current Slide Index = " + nCurrentSlideIndex);
oDocContent.Push(oParagraph);
oSlide1.AddObject(oShape);
var oSlide2 = Api.CreateSlide();
oPresentation.AddSlide(oSlide2);
builder.SaveFile("pptx", "ApiPresentation.pptx");
builder.CloseFile();
