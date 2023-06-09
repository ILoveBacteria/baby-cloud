from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.models import User
from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import ensure_csrf_cookie
from accounts.decorators import disable_view


@ensure_csrf_cookie
def login_view(request):
    if request.user.is_authenticated:
        return HttpResponse('Already logged in')
    if request.method == 'GET':
        return render(request, 'accounts/login.html', context={'title': 'Login'})
    username = request.POST['username']
    password = request.POST['password']
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        return HttpResponse('OK')
    return HttpResponse('Fail', status=404)


def logout_view(request):
    logout(request)
    return HttpResponse('Logout')


@disable_view
@ensure_csrf_cookie
def signup_view(request):
    if request.user.is_authenticated:
        return HttpResponse('Already logged in')
    if request.method == 'GET':
        return render(request, 'accounts/signup.html', context={'title': 'Login'})
    username = request.POST['username']
    password = request.POST['password']
    user = User.objects.create_user(username=username, password=password)
    user.save()
    return HttpResponse('OK')
