from rest_framework import routers

from .api import PBIViewSet

router = routers.DefaultRouter()

router.register('api/pbis', PBIViewSet, 'pbis')

# This takes every router url we've registered
urlpatterns = router.urls