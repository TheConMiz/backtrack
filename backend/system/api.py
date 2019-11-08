from system.models import PBI
from system.models import Project
from rest_framework import viewsets, permissions
<<<<<<< HEAD
from .serializers import PBISerializer
from .serializers import ProjectSerializer
=======
from .serializers import *
>>>>>>> abab10e9d91b48cd064b226951c13a9e10c51ea6

class PBIViewSet(viewsets.ModelViewSet):

    queryset = PBI.objects.all()

    # Need to change this as we add user authentication
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = PBISerializer

<<<<<<< HEAD

class ProjectView(viewsets.ModelViewSet):
    queryset = Project.objects.all()
=======
class TaskViewSet(viewsets.ModelViewSet):

    queryset = Task.objects.all()
>>>>>>> abab10e9d91b48cd064b226951c13a9e10c51ea6

    # Need to change this as we add user authentication
    permission_classes = [
        permissions.AllowAny
    ]
<<<<<<< HEAD
    serializer_class = ProjectSerializer
=======

    serializer_class = TaskSerializer
>>>>>>> abab10e9d91b48cd064b226951c13a9e10c51ea6
