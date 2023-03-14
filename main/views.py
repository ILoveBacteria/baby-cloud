from django.shortcuts import render


def index(request):
    context = {
        'title': 'Baby Cloud'
    }
    return render(request, 'main/index.html', context)
