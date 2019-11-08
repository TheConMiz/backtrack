from rest_framework import serializers

from system.models import PBI
from system.models import Project


class PBISerializer(serializers.ModelSerializer):
    class Meta:
        model = PBI
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'