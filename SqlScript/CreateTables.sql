Create database School
GO

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
	[FatherOccupation] [nvarchar](100) NULL,
	[MotherOccupation] [nvarchar](100) NULL,
	[FatherHelpArea] [nvarchar](100) NULL,
	[MotherHelpArea] [nvarchar](100) NULL,
	[Address] [nvarchar](200) NULL,
	[City] [nvarchar](50) NULL,
	[State] [nvarchar](50) NULL,
	[ZipCode] [nvarchar](50) NULL,
	[CreatedAt] [datetime2](7) NOT NULL,
	[UpdatedAt] [datetime2](7) NOT NULL,
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
	[FamilyId] [int] NOT NULL,
	[FirstName] [nvarchar](50) NOT NULL,
	[LastName] [nvarchar](50) NOT NULL,
	[ChineseName] [nvarchar](20) NULL,
	[Birthday] [date] NOT NULL,
	[Gender] [nvarchar](10) NOT NULL,
	[CreatedAt] [datetime2](7) NOT NULL,
	[UpdatedAt] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_Students] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Students]  WITH CHECK ADD  CONSTRAINT [FK_Students_Families] FOREIGN KEY([FamilyId])
REFERENCES [dbo].[Families] ([Id])
GO

ALTER TABLE [dbo].[Students] CHECK CONSTRAINT [FK_Students_Families]
GO


/****** Object:  Table [dbo].[Registrations]    Script Date: 9/29/2019 3:22:41 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Registrations](
	[SchoolYear] [int] NOT NULL,
	[StudentId] [int] NOT NULL,
	[Grade] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_Registrations] PRIMARY KEY CLUSTERED 
(
	[SchoolYear] ASC,
	[StudentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Registrations]  WITH CHECK ADD  CONSTRAINT [FK_Registrations_Students] FOREIGN KEY([StudentId])
REFERENCES [dbo].[Students] ([Id])
GO

ALTER TABLE [dbo].[Registrations] CHECK CONSTRAINT [FK_Registrations_Students]
GO







---- Seed data
-- Families
SET IDENTITY_INSERT [dbo].[Families] ON 
GO
INSERT [dbo].[Families] ([Id], [FatherName], [MotherName], [FatherChineseName], [MotherChineseName], [FatherPhone], [MotherPhone], [FatherEmail], [MotherEmail], [SpokenLanguages], [FatherOccupation], [MotherOccupation], [FatherHelpArea], [MotherHelpArea], [Address], [City], [State], [ZipCode], [CreatedAt], [UpdatedAt]) 
VALUES (1, N'Daming Wang', N'Alice Wang', N'王大明', N'王艾莉', N'4151234567', N'4159876543', N'daming@test.com', N'alice@test.com', N'Mandarin', N'Engineer', N'Accountant', N'Computer', N'Finance', N'123 Main st', N'San Mateo', N'CA', N'94403', CAST(N'2019-09-29T00:00:00.0000000' AS DateTime2), CAST(N'2019-09-29T00:00:00.0000000' AS DateTime2))
GO
SET IDENTITY_INSERT [dbo].[Families] OFF
GO

-- Students
SET IDENTITY_INSERT [dbo].[Students] ON 
GO
INSERT [dbo].[Students] ([Id], [FamilyId], [FirstName], [LastName], [ChineseName], [Birthday], [Gender], [CreatedAt], [UpdatedAt]) 
VALUES (1, 1, N'Stuart', N'Wang', N'王大寶', CAST(N'2013-02-01' AS Date), N'M', CAST(N'2019-09-29T00:00:00.0000000' AS DateTime2), CAST(N'2019-09-29T00:00:00.0000000' AS DateTime2))
GO
SET IDENTITY_INSERT [dbo].[Students] OFF
GO

-- Registration
INSERT [dbo].[Registrations] ([SchoolYear], [StudentId], [Grade]) VALUES (20192020, 1, N'KA')
