from django.contrib import messages
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.models import User
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse
from django.views.decorators.csrf import ensure_csrf_cookie

from accounts.decorators import disable_view


@ensure_csrf_cookie
def login_view(request):
    if request.user.is_authenticated:
        messages.add_message(request, messages.INFO, 'You have already logged in!')
        return HttpResponseRedirect(reverse('index'))
    if request.method == 'GET':
        return render(request, 'accounts/login.html', context={'title': 'Login'})
    username = request.POST['username']
    password = request.POST['password']
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        messages.add_message(request, messages.SUCCESS, 'Logged in successful!')
        if 'next' in request.GET:
            return HttpResponseRedirect(request.GET['next'])
        return HttpResponseRedirect(reverse('index'))
    messages.add_message(request, messages.ERROR, 'Username or password is incorrect!')
    return render(request, 'accounts/login.html', context={'title': 'Login'})


def logout_view(request):
    logout(request)
    messages.add_message(request, messages.SUCCESS, 'Logged out!')
    return HttpResponseRedirect(reverse('index'))


@disable_view
@ensure_csrf_cookie
def signup_view(request):
    if request.user.is_authenticated:
        messages.add_message(request, messages.INFO, 'You have already logged in!')
        return HttpResponseRedirect(reverse('index'))
    if request.method == 'GET':
        return render(request, 'accounts/signup.html', context={'title': 'Login'})
    username = request.POST['username']
    password = request.POST['password']
    user = User.objects.create_user(username=username, password=password)
    user.save()
    messages.add_message(request, messages.SUCCESS, 'Your account has been created successfully!')
    return HttpResponseRedirect(reverse('login'))
