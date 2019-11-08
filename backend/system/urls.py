from rest_framework import routers

from .api import PBIViewSet
from .api import ProjectView

router = routers.DefaultRouter()

router.register('api/pbis', PBIViewSet, 'pbis')
router.register('api/project', ProjectView, 'project')

# This takes every router url we've registered
urlpatterns = router.urls