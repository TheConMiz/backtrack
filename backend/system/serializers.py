from rest_framework import serializers

from system.models import *

class PBISerializer(serializers.ModelSerializer):
    class Meta:
        model = PBI
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'
    

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'


class ProjectDevelopersSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectDevelopers
        fields = '__all__'
