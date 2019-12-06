from django.contrib import admin

from .models import *

admin.site.register(Project)
admin.site.register(Task)
admin.site.register(PBI)
admin.site.register(MultiUser)
admin.site.register(Sprint)
admin.site.register(ProjectDevelopers)
admin.site.register(PBIsInSprint)