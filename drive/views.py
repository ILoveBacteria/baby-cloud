import re

from django.shortcuts import render
from django.http import JsonResponse

import os


# Create your views here.
def index(request):
    context = {
        'title': 'Drive'
    }
    return render(request, 'drive/index.html', context)


def api_doc(request):
    context = {
        'title': 'API DOC | Drive'
    }
    return render(request, 'drive/api_doc.html', context)


def api_get_directory(request):
    path = request.GET['path']
    with os.scandir(path) as it:
        folder_list = list(it)
        response = {
            'count': len(folder_list),
            'directory': [],
        }
        for f in folder_list:
            obj = {
                'name': f.name,
                'is_directory': f.is_dir(),
                'is_file': f.is_file(),
                'path': f'{path}/{f.name}',
                'size': f.stat().st_size,
                'extension': None,
            }
            if obj['is_file']:
                result = re.findall(r'\.[\w\d]*$', f.name)
                obj['extension'] = result[0] if result else None
            response['directory'].append(obj)
        return JsonResponse(response)


def api_file(request):
    pass
