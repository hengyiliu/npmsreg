This is the registration system for North Penisula Mandarin School (NPMS). This is the vNext version. The goal of this project is not only to provide the same features of the existing
system, but is open source, built with cross platform technologies and can be developed in Mac or Windows.

The project is built using .NET Core and React/TypeScript. The project is a standard web app with the frontend written in TypeScript and using React framework, and the
backend REST API written in C# in .NET Core.

### Prerequisite
For Mac and Windows, please install the following developer tools (They are all cross platform and work in Mac, Windows and Linux).
- .NET Core SDK https://dotnet.microsoft.com/download
- Visual Studio Code https://code.visualstudio.com/, a light weight editor/debugger/IDE for any programming languages, especially good for TypeScript/C#.
- C# extension for VS Code. https://code.visualstudio.com/docs/languages/csharp
- SQLite for database. https://www.sqlite.org/


If you are familiar with Visual Studio in Windows, you can also use Visual Studio 2019 and SQL Server.

### Generate models from database
Scaffold-DbContext "Server=(localdb)\mssqllocaldb;Database=School;Trusted_Connection=True;" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models