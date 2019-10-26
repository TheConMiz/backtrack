from django.shortcuts import render
import random
from django.http import HttpResponseRedirect
from rest_framework import viewsets          # add this
    #from .serializers import TodoSerializer      # add this
from .models import *    
from django.template import loader
from django.http import JsonResponse
    

def pbiview(request):
    context = {}
    template= 'pbi.html'
    pbi = PBI.objects.all()
    context['pbis'] = pbi

    if request.method == "POST":
        name=request.POST.get("name", "")
        desc=request.POST.get("desc", "")
        # story_pts=random.randint(1,7)

        pbi_id=len(pbi) + 1
        a = PBI(pbi_id=pbi_id, project_id=5,name=name,desc= desc,story_pts=0)
        a.save()
        return HttpResponseRedirect('/pbiview')   

    return render(request,template,context)

def delete(request, id):
    note = get_object_or_404(PBI, pk=id).delete()
    return HttpResponseRedirect(reverse('/'))

    