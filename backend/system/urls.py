from rest_framework import routers

from .api import *

from accounts.api import GetUsersAPI

router = routers.DefaultRouter()

router.register('api/project', ProjectView, 'project')
router.register('api/sprint', SprintViewSet, 'sprint')
router.register('api/pbis', PBIViewSet, 'pbis')
router.register('api/tasks', TaskViewSet, 'tasks')

router.register('api/project_developers', ProjectDevelopersView, 'project_developers')

router.register('api/pbisinsprint', PBIsInSprintView, 'pbisinsprint')
router.register('api/get_users', GetUsersAPI, 'get_users')

# This takes every router url we've registered
urlpatterns = router.urls
