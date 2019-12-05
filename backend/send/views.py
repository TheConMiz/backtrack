from django.shortcuts import render
from django.core.mail import send_mail

# Create your views here.
def index(request): 
    send_mail(
    'Subject here',
    'Here is the message.',
    'jcalamansi@gmail.com',
    ['daresa3949@mail-now.top'],
    fail_silently=False,
    )   
    return render(request, 'send/index.html')