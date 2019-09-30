This is the vNext version of registration system for North Penisula Mandarin School (NPMS). Alghough the current system provides many  necessary features for the school, it was only maintained by me, and its ASP.NET MVC project and database schema is somewhat out of date. The goal of this vNext project is not only to provide the feature parity of the existing
registration system, but also to be open source. It will be built with cross platform technologies and can be developed in Mac or Windows.

The project is built with .NET Core and React/TypeScript. The project is a SPA web app with the frontend written in TypeScript with React framework, and the
backend REST API written in C# in .NET Core.

### Prerequisite
For Mac and Windows, please install the following developer tools (They are all cross platform and work in Mac, Windows or Linux).
- .NET Core SDK 3.0 https://dotnet.microsoft.com/download
- Visual Studio Code https://code.visualstudio.com/, a light weight editor/debugger/IDE for any programming languages, especially good for TypeScript/C#.
- C# extension for VS Code. https://code.visualstudio.com/docs/languages/csharp
- SQLite for database. https://www.sqlite.org/


If you are familiar with Visual Studio in Windows, you can also use Visual Studio 2019 and SQL Server.

### Run project
- Clone the repo
- Open the folder in Visual Studio Code.
- Start Debugging menu and it should install all the npm packages and lauch a local web server.


### Generate models from database
Scaffold-DbContext "Server=(localdb)\mssqllocaldb;Database=School;Trusted_Connection=True;" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models

### ESlint
node_modules\.bin\eslint src/**/*.ts

### Feature Requirements
For school administrators/principal/dean/board members/etc, 
- The system has all student information and their registration information.
- Handle registration and tuition payments
- Update parent services (for tuition credit)
- Student report cards
- Must be easy to prepare for a new school year

For teachers:
- Teachers can get student information for his/her class only.
- Enter students grade and generate report cards.
