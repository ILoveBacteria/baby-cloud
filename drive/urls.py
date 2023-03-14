from django.urls import path

from . import views

urlpatterns = [
    path('', views.drive, name='drive'),
    path('api/directory/', views.api_get_directory, name='directory'),
    path('api/file/', views.api_file, name='file'),
    path('api/doc', views.api_doc, name='doc'),
]
