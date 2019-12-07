from rest_framework import viewsets, permissions, generics
from system.models import *
from .serializers import *

from rest_framework.response import Response
from knox.models import AuthToken

# API for registering MultiUsers and giving them Auth tokens
class RegisterAPI(generics.GenericAPIView):

    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        user = serializer.save()

        return Response({
            "user": MultiUserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })

# API for Logging in
class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data

        return Response({
            "user": MultiUserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })

# API for creating a protected route for Users
class GetUserAPI(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    serializer_class = MultiUserSerializer

    def get_object(self):
        return self.request.user


class GetUsersAPI(viewsets.ModelViewSet):

    queryset = MultiUser.objects.all()

    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = MultiUserSerializer
