from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def index(request):
    context = {
        'title': 'Drive'
    }
    return render(request, 'drive/index.html', context)