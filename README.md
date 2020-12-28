This is the vNext version of registration system for North Penisula Mandarin School (NPMS). Alghough the current system provides many necessary features for the school, it was only maintained by me. The goal of this vNext project is not only to provide the feature parity of the existing
registration system, but can also be maintained by other peole and open source.

The project is a standard web app with some REST APIs written in C# in .NET Core and the fronend UI pages written in TypeScript with React framework. It can be developed in Mac or Windows.

### Prerequisite
For Mac and Windows, please install the following developer tools (they are all cross platform and work in Mac, Windows or Linux).
- .NET SDK 5.0 https://dotnet.microsoft.com/download/dotnet/5.0 (in column "Build apps - SDK", choose your platform)
- Visual Studio Code https://code.visualstudio.com/, a light weight editor/debugger/IDE for any programming languages, especially good for TypeScript/C#.
- C# extension for VS Code. https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp
- Debugger for Chrome extension for VS code. https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome
- SQLite for database. https://www.sqlite.org/
- Node.js (https://nodejs.org/en/ v14 LTS)
- npm (installed with node.js. Update to the latest, v6.14.0+)


If you are familiar with Visual Studio in Windows, you can also use Visual Studio 2019 (https://visualstudio.microsoft.com/downloads/ Free version for Windows and Mac) and SQL Server Express LocalDB.

### How to run this project
The project contains both server (in .NET Core) and client (React in TypeScript) projects. The client project is under the "ClientApp" folder.

- Clone the repo
  ```Shell
  git clone https://github.com/hengyiliu/npmsreg.git
  ```
- Restore packages
  - restore dotnet packages
    ```Shell
    cd npmsreg
    dotnet restore
    ```
  - restore npm packages
    ```Shell
    cd ClientApp
    npm install
    ```
- Install localhost SSL certificates. The project uses HTTPS development certificate. A certificate should have been installed but it's not trusted. Run the following command to trust the cert.
  ```Shell
  dotnet dev-certs https --trust
  ```
- Launch Visual Studio Code and open folder npmsreg
- Click Debug menu -> Start Debugging. It will start a local web server and launch Chrome browser to https://localhost:5001
- Go to https://localhost:5001/api/Families in the browser, it will return all families in Json format. The server REST API is working.
- Go to https://localhost:5001/Family/1, and it should return a UI page with some family detail. The client React page is working.


### How to generate models from database
The project has a seprate SQL script for SQL Database. If you change the schema, run the following command in Package Manager Console to generate C# object models from the db.
```Shell
Scaffold-DbContext "Server=(localdb)\mssqllocaldb;Database=School;Trusted_Connection=True;" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models
```

### How to run ESlint
```Shell
cd ClientApp
npx eslint . --ext .ts,.tsx
```

### Deployment
You can test the app at https://npmsreg.azurewebsites.net/ (It may take a few seconds to load the first time because the database and web site are paused automatically when there's no traffic for a period of time.)

### Feature Requirements
For school administrators/principal/dean/board members/etc, 
- The system contains all student information and their registration information.
- Handle registration and withdraw
- Calculate tuition amount (apply any tuition discount)
- Export student report cards.
- Must be easy to prepare for a new school year
- Authentication (integrated with Google Suite login) and authorization (role based access control)
- Easy to integrate with 3rd party payment system like Square.
- Academic contest registration.

For teachers:
- Teachers can get student information for his/her class only.
- Enter students grades and generate report cards.
