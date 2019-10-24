from django.db import models

class Project(models.Model):
    project_id = models.IntegerField(primary_key=True, max_length=6)
    project_owner_id= models.ForeignKey(Developer)
    project_manager_id= models.ForeignKey(Manager)
    date_created=models.DateTimeField()
    last_modified=models.DateTimeField()
    name=models.CharField(max_length=30)
    description=models.CharField(max_length=100)

    def _str_(self):
        return self.project_id


class Developer(models.Model):
    employee_id = models.IntegerField(primary_key=True, max_length=6)
     name=models.CharField(max_length=30)

class Manager(models.Model):
    employee_id = models.IntegerField(primary_key=True, max_length=6)
    name=models.CharField(max_length=30)

class PBI(models.Model):
    pbi_id=models.IntegerField(primary_key=True, max_length=6)
    project_id = models.ForeignKey(Project)
    name=models.CharField(max_length=30)
    description=models.CharField(max_length=100)


class Task(models.Model):
    task_id=models.IntegerField(primary_key=True, max_length=6)
    pbi_id = models.ForeignKey(PBI)
    name=models.CharField(max_length=30)
    description=models.CharField(max_length=100)
    status=models.CharField(max_length=10)



