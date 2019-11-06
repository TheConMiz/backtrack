from django.db import models

class Developer(models.Model):
    e_id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=30)

class Manager(models.Model):
    e_id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=30)

class Project(models.Model):
    p_id = models.IntegerField(primary_key=True)
    owner_id = models.ForeignKey(Developer, on_delete=models.CASCADE)
    manager_id = models.ForeignKey(Manager, on_delete=models.CASCADE)
    date_created = models.DateTimeField()
    last_modified = models.DateTimeField()
    name = models.CharField(max_length=30)
    desc = models.CharField(max_length=100)

class PBI(models.Model):
    pbi_id = models.IntegerField(primary_key=True)
    project_id = models.ForeignKey(Project, on_delete=models.CASCADE)
    story_pts = models.IntegerField()
    name = models.CharField(max_length=30)
    desc = models.CharField(max_length=100)

class Task(models.Model):
    task_id = models.IntegerField(primary_key=True)
    pbi_id = models.ForeignKey(PBI,on_delete=models.CASCADE)
    name = models.CharField(max_length=30)
    desc = models.CharField(max_length=100)
    status = models.IntegerField()
