from django.shortcuts import render
from rest_framework import viewsets          # add this
    #from .serializers import TodoSerializer      # add this
from .models import *    
from django.template import loader
from django.http import JsonResponse

def senddata(request):
    template='fake.html'
    bullshitjson={'bull':'shit'}
    # return render(request,template,bullshitjson)
    return JsonResponse(bullshitjson)

def mainpage(request):
    template='src/MainPage.jsx'
    return render(request,template)
    

def pbiview(request):
    context = {}
    template= 'pbi.html'
    pbi = PBI.objects.all()
    context['pbis'] = pbi

    if request.method == "POST":
        name=request.POST.get("name", "")
        desc=request.POST.get("desc", "")
        pbi_id=len(pbi) +1
        a = PBI(pbi_id=pbi_id, project_id=5,name=name,desc= desc)
        a.save()
        return render(request,template,context)
      
      

    return render(request,template,context)

    