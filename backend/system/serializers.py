from rest_framework import serializers

<<<<<<< HEAD
from system.models import PBI
from system.models import Project

=======
from system.models import *
>>>>>>> abab10e9d91b48cd064b226951c13a9e10c51ea6

class PBISerializer(serializers.ModelSerializer):
    class Meta:
        model = PBI
        fields = '__all__'

<<<<<<< HEAD
class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
=======
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
>>>>>>> abab10e9d91b48cd064b226951c13a9e10c51ea6
        fields = '__all__'