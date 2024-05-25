
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 05/04/2024 00:56:19
-- Generated from EDMX file: D:\Documentos\Visual Studio 2022\Proyectos\CMISentinelPrime\CMISentinelPrime\Models\CMIModel.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [CMISentinelPrime];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------


-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------


-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'CMISet'
CREATE TABLE [dbo].[CMISet] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [TimePeriod] datetime  NOT NULL
);
GO

-- Creating table 'ObjectiveSet'
CREATE TABLE [dbo].[ObjectiveSet] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Description] nvarchar(max)  NOT NULL,
    [Metric] nvarchar(max)  NOT NULL,
    [Weighting] decimal(18,0)  NOT NULL,
    [CMIId] int  NOT NULL,
    [PerspectiveId] int  NOT NULL
);
GO

-- Creating table 'PerspectiveSet'
CREATE TABLE [dbo].[PerspectiveSet] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'IndicatorSet'
CREATE TABLE [dbo].[IndicatorSet] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [Description] nvarchar(max)  NOT NULL,
    [MeasurementFrequency] nvarchar(max)  NOT NULL,
    [UnitMeasure] nvarchar(max)  NOT NULL,
    [ObjectiveId] int  NOT NULL,
    [MetricTypeId] int  NOT NULL
);
GO

-- Creating table 'MetricTypeSet'
CREATE TABLE [dbo].[MetricTypeSet] (
    [Id] int IDENTITY(1,1) NOT NULL
);
GO

-- Creating table 'DataIndicatorSet'
CREATE TABLE [dbo].[DataIndicatorSet] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Value] decimal(18,0)  NOT NULL,
    [Date] datetime  NOT NULL,
    [IndicatorId] int  NOT NULL
);
GO

-- Creating table 'TargetSet'
CREATE TABLE [dbo].[TargetSet] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Description] nvarchar(max)  NOT NULL,
    [ExpectedValue] decimal(18,0)  NOT NULL,
    [DeadlineDate] datetime  NOT NULL,
    [IndicatorId] int  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Id] in table 'CMISet'
ALTER TABLE [dbo].[CMISet]
ADD CONSTRAINT [PK_CMISet]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'ObjectiveSet'
ALTER TABLE [dbo].[ObjectiveSet]
ADD CONSTRAINT [PK_ObjectiveSet]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'PerspectiveSet'
ALTER TABLE [dbo].[PerspectiveSet]
ADD CONSTRAINT [PK_PerspectiveSet]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'IndicatorSet'
ALTER TABLE [dbo].[IndicatorSet]
ADD CONSTRAINT [PK_IndicatorSet]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'MetricTypeSet'
ALTER TABLE [dbo].[MetricTypeSet]
ADD CONSTRAINT [PK_MetricTypeSet]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'DataIndicatorSet'
ALTER TABLE [dbo].[DataIndicatorSet]
ADD CONSTRAINT [PK_DataIndicatorSet]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'TargetSet'
ALTER TABLE [dbo].[TargetSet]
ADD CONSTRAINT [PK_TargetSet]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [CMIId] in table 'ObjectiveSet'
ALTER TABLE [dbo].[ObjectiveSet]
ADD CONSTRAINT [FK_CMIObjective]
    FOREIGN KEY ([CMIId])
    REFERENCES [dbo].[CMISet]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_CMIObjective'
CREATE INDEX [IX_FK_CMIObjective]
ON [dbo].[ObjectiveSet]
    ([CMIId]);
GO

-- Creating foreign key on [PerspectiveId] in table 'ObjectiveSet'
ALTER TABLE [dbo].[ObjectiveSet]
ADD CONSTRAINT [FK_PerspectiveObjective]
    FOREIGN KEY ([PerspectiveId])
    REFERENCES [dbo].[PerspectiveSet]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_PerspectiveObjective'
CREATE INDEX [IX_FK_PerspectiveObjective]
ON [dbo].[ObjectiveSet]
    ([PerspectiveId]);
GO

-- Creating foreign key on [ObjectiveId] in table 'IndicatorSet'
ALTER TABLE [dbo].[IndicatorSet]
ADD CONSTRAINT [FK_ObjectiveIndicator]
    FOREIGN KEY ([ObjectiveId])
    REFERENCES [dbo].[ObjectiveSet]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ObjectiveIndicator'
CREATE INDEX [IX_FK_ObjectiveIndicator]
ON [dbo].[IndicatorSet]
    ([ObjectiveId]);
GO

-- Creating foreign key on [MetricTypeId] in table 'IndicatorSet'
ALTER TABLE [dbo].[IndicatorSet]
ADD CONSTRAINT [FK_MetricTypeIndicator]
    FOREIGN KEY ([MetricTypeId])
    REFERENCES [dbo].[MetricTypeSet]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_MetricTypeIndicator'
CREATE INDEX [IX_FK_MetricTypeIndicator]
ON [dbo].[IndicatorSet]
    ([MetricTypeId]);
GO

-- Creating foreign key on [IndicatorId] in table 'DataIndicatorSet'
ALTER TABLE [dbo].[DataIndicatorSet]
ADD CONSTRAINT [FK_IndicatorDataIndicator]
    FOREIGN KEY ([IndicatorId])
    REFERENCES [dbo].[IndicatorSet]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_IndicatorDataIndicator'
CREATE INDEX [IX_FK_IndicatorDataIndicator]
ON [dbo].[DataIndicatorSet]
    ([IndicatorId]);
GO

-- Creating foreign key on [IndicatorId] in table 'TargetSet'
ALTER TABLE [dbo].[TargetSet]
ADD CONSTRAINT [FK_IndicatorTarget]
    FOREIGN KEY ([IndicatorId])
    REFERENCES [dbo].[IndicatorSet]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_IndicatorTarget'
CREATE INDEX [IX_FK_IndicatorTarget]
ON [dbo].[TargetSet]
    ([IndicatorId]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------