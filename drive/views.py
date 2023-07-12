import os
import re

from django.http import JsonResponse, FileResponse, HttpResponseNotAllowed, HttpResponseBadRequest, HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import ensure_csrf_cookie
from django.contrib.auth.decorators import login_required
from drive.forms import UploadFileForm


@login_required
@ensure_csrf_cookie
def drive(request):
    context = {
        'title': 'Drive'
    }
    return render(request, 'drive/drive.html', context)


@login_required
def api_doc(request):
    context = {
        'title': 'API DOC'
    }
    return render(request, 'drive/api_doc.html', context)


@login_required
def api_get_directory(request):
    path = request.GET['path']
    dir_entries = os.scandir(path)
    response = {
        'count': 0,
        'directory': [],
    }
    for entry in dir_entries:
        obj = {
            'name': entry.name,
            'isDirectory': entry.is_dir(),
            'isFile': entry.is_file(),
            'path': f'{path}/{entry.name}',
            'size': entry.stat().st_size,
            'extension': None,
            'type': None,
        }
        if obj['isFile']:
            result = re.findall(r'\.[\w\d]*$', entry.name)
            obj['extension'] = result[0][1:].lower() if result else None
        obj['type'] = extension_to_type(obj['extension']) if obj['isFile'] else 'directory'
        response['directory'].append(obj)
        response['count'] += 1
    return JsonResponse(response)


@login_required
def api_download_file(request):
    path = request.GET['path']
    return FileResponse(open(path, 'rb'))


@login_required
def api_upload_file(request):
    if request.method == 'POST':
        form = UploadFileForm(request.POST, request.FILES)
        if form.is_valid():
            handle_uploaded_file(form.cleaned_data['file'], form.cleaned_data['path'])
            return HttpResponse('OK')
        return HttpResponseBadRequest()
    return HttpResponseNotAllowed(['POST'])


def handle_uploaded_file(file, path):
    with open(os.path.join(path, file.name), 'wb') as destination:
        for chunk in file.chunks():
            destination.write(chunk)


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
