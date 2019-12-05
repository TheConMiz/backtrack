from django.db import models
from django.urls import path

from django.contrib.auth.models import UserManager, User, AbstractUser

# This is a customised version of the default User model.
class MultiUser(AbstractUser):
    pass
    # user = models.OneToOneField(User, on_delete=models.CASCADE)

    # name = models.CharField(max_length=100, null=True)

    # username = models.CharField(max_length=30, null=True)
    # password = models.CharField(max_length=30, null=True)

    # email = models.EmailField(max_length=100, null=True)

    # User Type Key
    # 1 - Developer
    # 2 - Manager
    type = models.IntegerField(default=0, null=True)

    # objects = UserManager()
    

class Project(models.Model):
    owner_id = models.ForeignKey(MultiUser, on_delete=models.CASCADE, related_name="projects")
    manager_id = models.ForeignKey(MultiUser, on_delete=models.CASCADE)
    date_created = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=30)
    desc = models.CharField(max_length=100)

class Sprint(models.Model):
    # Capacity 
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
    priority = models.IntegerField(default=0)

    # Status Key
    ## 0 - Not in Sprint
    ## 1 - To-Do
    ## 2 - In Progress
    ## 3 - Completed
    status = models.IntegerField(default=1)



class Task(models.Model):
    pbi_id = models.ForeignKey(PBI, on_delete=models.CASCADE)
    dev_id = models.ForeignKey(MultiUser, on_delete=models.CASCADE, null=True)
    name = models.CharField(max_length=30)
    desc = models.CharField(max_length=100)
    priority = models.IntegerField(default=0)
    effort = models.IntegerField(default=0)

    # Status Key
    ## 1 - To-Do
    ## 2 - In Progress
    ## 3 - Completed
    status = models.IntegerField(default=1)
