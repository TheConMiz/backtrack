from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(PBI)
admin.site.register(Developer)
admin.site.register(Manager)
admin.site.register(Project)
admin.site.register(Task)