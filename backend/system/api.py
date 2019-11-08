from system.models import PBI
from system.models import Project
from rest_framework import viewsets, permissions
from .serializers import PBISerializer
from .serializers import ProjectSerializer

class PBIViewSet(viewsets.ModelViewSet):

    queryset = PBI.objects.all()

    # Need to change this as we add user authentication
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = PBISerializer


class ProjectView(viewsets.ModelViewSet):
    queryset = Project.objects.all()

    # Need to change this as we add user authentication
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProjectSerializer