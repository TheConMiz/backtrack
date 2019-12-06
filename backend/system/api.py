from system.models import PBI
from system.models import Project
from rest_framework import viewsets, permissions
from .serializers import *

class PBIViewSet(viewsets.ModelViewSet):
    queryset = PBI.objects.all()

    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = PBISerializer

    # def get_queryset(self):
    #     self.request.user.pbis.all

    # def perform_create(self, serializer):
    #     serializer.save(owner=self.request.user)

    
class TaskViewSet(viewsets.ModelViewSet):

    queryset = Task.objects.all()

    # Need to change this as we add user authentication
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = TaskSerializer

class ProjectView(viewsets.ModelViewSet):


    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = ProjectSerializer

    # def get_queryset(self):
    #    self.request.user.projects.all

    # def perform_create(self, serializer):
    #     serializer.save(owner=self.request.user)

    serializer_class = ProjectSerializer


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

