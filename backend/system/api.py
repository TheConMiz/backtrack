from system.models import PBI
from rest_framework import viewsets, permissions
from .serializers import *

class PBIViewSet(viewsets.ModelViewSet):

    queryset = PBI.objects.all()

    # Need to change this as we add user authentication
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = PBISerializer

class TaskViewSet(viewsets.ModelViewSet):

    queryset = Task.objects.all()

    # Need to change this as we add user authentication
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = TaskSerializer
