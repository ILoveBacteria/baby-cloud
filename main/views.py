from django.http import HttpResponseRedirect
from django.shortcuts import render


def index(request):
    return render(request, 'main/index.html')


def favicon(request):
    return HttpResponseRedirect('/static/main/icon/favicon.ico')
