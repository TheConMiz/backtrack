from rest_framework import serializers
from system.models import *
from django.contrib.auth import authenticate

# MultiUser Serializer
class MultiUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = MultiUser
        fields = ('id', 'username', 'email', "type")

# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = MultiUser
        fields = ("id", "username", "email", "password")
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = MultiUser.objects.create_user(
            validated_data["username"], validated_data["email"], validated_data["password"])

        return user

# Login Serializer
class LoginSerializer(serializers.Serializer):

    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)

        if user and user.is_active:
            return user

        raise serializers.ValidationError("Incorrect Account Credentials.")