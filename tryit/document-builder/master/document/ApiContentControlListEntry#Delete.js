builder.CreateFile("docx");
var oDocument = Api.GetDocument();
Api.pluginMethod_AddContentControlList(1, [{Display: "Item1_D", Value: "Item1_V"}, {Display: "Item2_D", Value: "Item2_V"}], {"Id": 100, "Tag": "CC_Tag", "Lock": 3});
var aContentControls = oDocument.GetAllContentControls();
var oContentControlList = aContentControls[0].GetDropdownList();
oDocument.AddElement(0, oContentControlList);
var oItem = oContentControlList.GetItem(0);
oItem.Delete();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first item was deleted from the combo box.");
oDocument.Push(oParagraph);
builder.SaveFile("docx", "Delete.docx");
builder.CloseFile();