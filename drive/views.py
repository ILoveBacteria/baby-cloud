from django.shortcuts import render
from django.http import JsonResponse
from django.http import FileResponse

import re
import os


def drive(request):
    context = {
        'title': 'Baby Cloud | Drive'
    }
    return render(request, 'drive/drive.html', context)


def api_doc(request):
    context = {
        'title': 'Baby Cloud | API DOC'
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
                'type': None,
            }
            if obj['is_file']:
                result = re.findall(r'\.[\w\d]*$', f.name)
                obj['extension'] = result[0][1:].lower() if result else None
            obj['type'] = extension_to_type(obj['extension']) if obj['is_file'] else 'directory'
            response['directory'].append(obj)
        return JsonResponse(response)


def api_file(request):
    path = request.GET['path']
    return FileResponse(open(path, 'rb'))


def extension_to_type(extension: str) -> str:
    if extension is None:
        return 'unknown'
    type_extension_dict = {
        'image': ['jpeg', 'jpg', 'png', 'ico'],
        'video': ['mp4', 'mkv', 'mov'],
        'music': ['mp3', 'wav'],
    }
    for key, value in type_extension_dict.items():
        if extension in value:
            return key
    if extension == 'pdf':
        return 'pdf'
    if extension == 'iso':
        return 'iso'
    if extension == 'zip':
        return 'zip'
    return 'unknown'
