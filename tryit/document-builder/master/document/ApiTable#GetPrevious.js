builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTable = Api.CreateTable(3, 3);
oDocument.Push(oTable);
oTable.SetWidth("percent", 100);
var oNextTable = Api.CreateTable(2, 2);
oNextTable.SetWidth("percent", 100);
oDocument.Push(oNextTable);
oTable = oNextTable.GetPrevious();
oTable.SetWidth("percent", 50);
builder.SaveFile("docx", "GetPrevious.docx");
builder.CloseFile();