from django.db import models

class PBI(models.Model):
    pbi_id = models.IntegerField(primary_key=True)
    project_id = models.IntegerField()
    story_pts = models.IntegerField()
    name = models.CharField(max_length=30)
    desc = models.CharField(max_length=100)


class Developer(models.Model):
    e_id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=30)

class Manager(models.Model):
    e_id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=30)

class Project(models.Model):
    p_id = models.IntegerField(primary_key=True)
    owner_id = models.IntegerField()
    manager_id = models.IntegerField()
    date_created = models.DateTimeField()
    last_modified = models.DateTimeField()
    name = models.CharField(max_length=30)
    desc = models.CharField(max_length=100)

class Task(models.Model):
    task_id = models.IntegerField(primary_key=True)
    pbi_id = models.IntegerField()
    name = models.CharField(max_length=30)
    desc = models.CharField(max_length=100)
    status = models.IntegerField()
