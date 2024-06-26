builder.CreateFile("docx");
var oDocument = Api.GetDocument();
Api.pluginMethod_AddContentControlList(1, [{Display: "Item1_D", Value: "Item1_V"}, {Display: "Item2_D", Value: "Item2_V"}], {"Id": 100, "Tag": "CC_Tag", "Lock": 3});
var aContentControls = oDocument.GetAllContentControls();
var oContentControlList = aContentControls[0].GetDropdownList();
oDocument.AddElement(0, oContentControlList);
oContentControlList.Add("Item3_D", "Item3_V", 2);
var oItem = oContentControlList.GetItem(1);
oItem.Delete();
oItem = oContentControlList.GetItem(0);
oItem.SetIndex(1);
oItem.Select();
oItem.SetText("Item1_D_new");
oItem.SetValue("Item1_V_new");
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first item value: " + oItem.GetValue());
oDocument.Push(oParagraph);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first item from the combo box: " + oItem.GetText());
oDocument.Push(oParagraph);
var sType = oItem.GetClassType();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first item class type: " + sType);
oDocument.Push(oParagraph);
var nIndex = oItem.GetIndex();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The oItem index: " + nIndex);
oDocument.Push(oParagraph);
oContentControlList = oItem.GetParent();
oParagraph = Api.CreateParagraph();
sType = oContentControlList.GetClassType();
oParagraph.AddText("The class type of the item parent element: " + sType);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "ApiContentControlListEntry.docx");
builder.CloseFile();