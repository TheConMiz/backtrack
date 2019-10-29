from system.models import PBI
from rest_framework import viewsets, permissions
from .serializers import PBISerializer

class PBIViewSet(viewsets.ModelViewSet):
    # This is a pyLint issue, don't worry unless everything breaks somehow
    queryset = PBI.objects.all()

    # Need to change this as we add user authentication
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = PBISerializer
