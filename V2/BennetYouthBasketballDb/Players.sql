CREATE TABLE [dbo].[Players]
(
		   [Id]                      INT              IDENTITY (1, 1) NOT NULL,
	   [FirstName] varchar(50),
	   [LastName] varchar(50),
	   [Grade] SMALLINT,
	   [Gender] bit,
	   [MedicalConditions] text,
	   [NeedUniform] bit,
	   [JeresySize] varchar(3),
	   [NumberRequest] smallint,
	   [Buttons] smallint,
	   [GuardianId] int,
	   [TeamId] int,
	   CONSTRAINT [PK_Players] PRIMARY KEY CLUSTERED ([Id] ASC),
	       CONSTRAINT [FK_Players_Guardians] FOREIGN KEY ([GuardianId]) REFERENCES [dbo].[Guardians] ([Id]),
	       CONSTRAINT [FK_Players_Teams] FOREIGN KEY ([TeamId]) REFERENCES [dbo].[Teams] ([Id])
)
