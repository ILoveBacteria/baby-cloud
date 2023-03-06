from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def index(request):
    context = {
        'title': 'Transfer'
    }
    return render(request, 'transfer/index.html', context)


def upload(request):
    context = {
        'title': 'Upload | Transfer'
    }
    return render(request, 'transfer/upload.html', context)
