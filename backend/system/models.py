from django.db import models
from django.urls import path

from django.contrib.auth.models import User

# Class for Developer
class Developer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)

    # name = models.CharField(max_length=30)

# Class for Manager
class Manager(models.Model):
    # name = models.CharField(max_length=30)
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)

class Project(models.Model):
    owner_id = models.ForeignKey(Developer, on_delete=models.CASCADE)
    manager_id = models.ForeignKey(Manager, on_delete=models.CASCADE)
    date_created = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=30)
    desc = models.CharField(max_length=100)

class Sprint(models.Model):
    #capacity 
    total_story_points = models.IntegerField(default=0)
    completed_story_points = models.IntegerField(default=0)
   
    # Status Key
    ## 1 - In progress
    ## 2 - Completed 
    status = models.IntegerField(default=1)

class PBI(models.Model):
    project_id = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="pbis")
    sprint_id = models.ForeignKey(Sprint, on_delete=models.CASCADE, null=True)
    story_pts = models.IntegerField(default=0)
    name = models.CharField(max_length=30)
    desc = models.CharField(max_length=100)

    # Status Key
    ## 0 - Not in Sprint
    ## 1 - To-Do
    ## 2 - In Progress
    ## 3 - Completed
    status = models.IntegerField(default=1)

    priority = models.IntegerField(default=0)


class Task(models.Model):
    pbi_id = models.ForeignKey(PBI, on_delete=models.CASCADE)
    dev_id = models.ForeignKey(Developer, on_delete=models.CASCADE, null=True)

    name = models.CharField(max_length=30)
    desc = models.CharField(max_length=100)

    # Status Key
    ## 1 - To-Do
    ## 2 - In Progress
    ## 3 - Completed
    status = models.IntegerField(default=1)
    priority = models.IntegerField(default=0)
    effort = models.IntegerField(default=0)


# class TaskOwnership(models.Model):
#     task_id = models.ForeignKey(Task, on_delete=models.CASCADE)
#     dev_id = models.ForeignKey(Developer, on_delete=models.CASCADE)

#     # Unit of effort: hours
#     effort = models.IntegerField(default=0)

#remove?
# class PBIsInSprint(models.Model):
#     sprint_id = models.ForeignKey(Sprint, on_delete=models.CASCADE, default=0)
#     pbi_id = models.ForeignKey(PBI, on_delete=models.CASCADE) 
