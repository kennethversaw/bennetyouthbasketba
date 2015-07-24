CREATE TABLE [dbo].[Guardians]
(
	   [Id]                      INT              IDENTITY (1, 1) NOT NULL,
	   [FirstName] varchar(50),
	   [LastName] varchar(50),
	   [Email] varchar(200),
	   [PhoneNumber] varchar(15),
	   CONSTRAINT [PK_Guardians] PRIMARY KEY CLUSTERED ([Id] ASC)
)
