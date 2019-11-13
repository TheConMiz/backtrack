from django.contrib import admin

from .models import *

admin.site.register(Developer)
admin.site.register(Manager)
admin.site.register(Project)
admin.site.register(Task)
admin.site.register(PBI)
admin.site.register(TaskOwnership)
admin.site.register(Sprint)
admin.site.register(PBIsInSprint)
