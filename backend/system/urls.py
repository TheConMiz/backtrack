from rest_framework import routers

from .api import *

router = routers.DefaultRouter()

router.register('api/project', ProjectView, 'project')
router.register('api/sprint', SprintViewSet, 'sprint')
router.register('api/pbis', PBIViewSet, 'pbis')
router.register('api/tasks', TaskViewSet, 'tasks')

router.register('api/project_developers', ProjectDevelopersView, 'project_developers')

router.register('api/pbisinsprint', PBIsInSprintView, 'pbisinsprint')

# This takes every router url we've registered
urlpatterns = router.urls
