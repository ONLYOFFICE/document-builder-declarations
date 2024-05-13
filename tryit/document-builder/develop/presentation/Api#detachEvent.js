builder.CreateFile("pptx");
Api.detachEvent("asc_onHyperlinkClick");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 200 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.AddText("The 'asc_onHyperlinkClick' event has been detached from this slide.");
oSlide.AddObject(oShape);
builder.SaveFile("pptx", "detachEvent.pptx");
builder.CloseFile();