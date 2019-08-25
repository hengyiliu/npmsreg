USE [School]
GO

/****** Object:  Table [dbo].[Families]    Script Date: 8/25/2019 2:35:50 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Families](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FatherName] [nvarchar](100) NULL,
	[MotherName] [nvarchar](100) NULL,
	[FatherChineseName] [nvarchar](50) NULL,
	[MotherChineseName] [nvarchar](50) NULL,
	[FatherPhone] [nvarchar](50) NULL,
	[MotherPhone] [nvarchar](50) NULL,
	[FatherEmail] [nvarchar](100) NULL,
	[MotherEmail] [nvarchar](100) NULL,
	[SpokenLanguages] [nvarchar](100) NOT NULL,
	[FatherWork] [nvarchar](100) NULL,
	[MotherWork] [nvarchar](100) NULL,
	[FatherSpecialty] [nvarchar](100) NULL,
	[MotherSpecialty] [nvarchar](100) NULL,
	[Address] [nvarchar](200) NULL,
	[City] [nvarchar](50) NULL,
	[State] [nvarchar](50) NULL,
	[ZipCode] [nvarchar](50) NULL,
 CONSTRAINT [PK_Families] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO


USE [School]
GO

/****** Object:  Table [dbo].[Students]    Script Date: 8/25/2019 2:35:58 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Students](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FamilyId] [int] NULL,
	[FirstName] [nvarchar](50) NULL,
	[LastName] [nvarchar](50) NULL,
	[ChineseName] [nvarchar](20) NULL,
	[Birthday] [date] NULL,
	[Gender] [nvarchar](10) NULL,
 CONSTRAINT [PK_Students] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

