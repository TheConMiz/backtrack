from rest_framework import routers

<<<<<<< HEAD
from .api import PBIViewSet
from .api import ProjectView
=======
from .api import *
>>>>>>> abab10e9d91b48cd064b226951c13a9e10c51ea6

router = routers.DefaultRouter()

router.register('api/pbis', PBIViewSet, 'pbis')
<<<<<<< HEAD
router.register('api/project', ProjectView, 'project')
=======
router.register('api/tasks', TaskViewSet, 'tasks')
>>>>>>> abab10e9d91b48cd064b226951c13a9e10c51ea6

# This takes every router url we've registered
urlpatterns = router.urls