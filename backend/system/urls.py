from rest_framework import routers

from .api import PBIViewSet

router = routers.DefaultRouter()

router.register('api/pbis', PBIViewSet, 'pbis')
router.register('api/tasks', TaskViewSet, 'tasks')

# This takes every router url we've registered
urlpatterns = router.urls