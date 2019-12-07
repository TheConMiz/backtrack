from system.models import PBI
from system.models import Project
from rest_framework import viewsets, permissions
from .serializers import *


class ProjectView(viewsets.ModelViewSet):

    queryset = Project.objects.all()

    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = ProjectSerializer


class SprintViewSet(viewsets.ModelViewSet):

    queryset = Sprint.objects.all()

    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = SprintSerializer



class PBIViewSet(viewsets.ModelViewSet):
    
    queryset = PBI.objects.all()

    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = PBISerializer

    
class TaskViewSet(viewsets.ModelViewSet):

    queryset = Task.objects.all()

    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = TaskSerializer

class ProjectDevelopersView(viewsets.ModelViewSet):

    queryset = ProjectDevelopers.objects.all()

    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = ProjectDevelopersSerializer


class PBIsInSprintView(viewsets.ModelViewSet):
    queryset = PBIsInSprint.objects.all()

    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = PBIsInSprintSerializer
