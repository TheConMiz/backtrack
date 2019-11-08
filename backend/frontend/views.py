from django.shortcuts import render
# from django.http

def index(request):
    return render(request, 'frontend/index.html')
