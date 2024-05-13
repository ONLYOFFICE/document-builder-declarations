builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
var oCell = oTable.GetRow(0).GetCell(0);
oCell.AddElement(0, oBlockLvlSdt);
var oParentTable = oBlockLvlSdt.GetParentTable();
oCell = oParentTable.GetRow(2).GetCell(0);
oParentTable.RemoveRow(oCell);
builder.SaveFile("docx", "GetParentTable.docx");
builder.CloseFile();