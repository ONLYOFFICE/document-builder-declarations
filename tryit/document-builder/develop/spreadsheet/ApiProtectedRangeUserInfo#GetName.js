builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
oWorksheet.GetRange("C1").SetValue("3");
oWorksheet.AddProtectedRange("Protected range", "A1:C1");
var oProtectedRange = oWorksheet.GetProtectedRange("Protected range");
oProtectedRange.AddUser("uid-1", "John Smith", "CanEdit");
oProtectedRange.AddUser("uid-2", "Mark Potato", "CanView");
var aUsers = oProtectedRange.GetAllUsers();
oWorksheet.GetRange("A3").SetValue("User name: " + aUsers[0].GetName());
builder.SaveFile("xlsx", "GetName.xlsx");
builder.CloseFile();