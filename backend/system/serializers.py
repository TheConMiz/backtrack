from rest_framework import serializers

from system.models import *


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'


class SprintSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sprint
        fields = '__all__'

class PBISerializer(serializers.ModelSerializer):
    class Meta:
        model = PBI
        fields = '__all__'

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'


class ProjectDevelopersSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectDevelopers
        fields = '__all__'

class PBIsInSprintSerializer(serializers.ModelSerializer):
    class Meta:
        model = PBIsInSprint
        fields = '__all__'
