Prerequisite
- Install VS2019 Community Edition
- Install SQL Server LocalDB


Scaffold-DbContext "Server=(localdb)\mssqllocaldb;Database=School;Trusted_Connection=True;" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models