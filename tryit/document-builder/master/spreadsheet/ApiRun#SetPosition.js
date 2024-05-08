builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is just a sample text.");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.AddText("This is a text run with the text raised 10 half-points.");
oRun.SetPosition(10);
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.AddText("This is a text run with the text lowered 16 half-points.");
oRun.SetPosition(-16);
oParagraph.AddElement(oRun);
builder.SaveFile("xlsx", "SetPosition.xlsx");
builder.CloseFile();
