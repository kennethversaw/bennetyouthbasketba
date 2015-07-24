CREATE TABLE [dbo].[Teams]
(
			   [Id]                      INT              IDENTITY (1, 1) NOT NULL,
			   [Grade] smallint,
			   [Gender] bit,
			   [CoachFirstName] varchar(50),
			   [CoachLastName] varchar(50),
			   	   [CoachEmail] varchar(200),
	   [CoachPhoneNumber] varchar(15),
			   	   CONSTRAINT [PK_Teams] PRIMARY KEY CLUSTERED ([Id] ASC),
)
