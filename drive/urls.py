from django.urls import path

from . import views

urlpatterns = [
    path('', views.drive, name='drive'),
    path('api/directory/', views.api_get_directory, name='directory'),
    path('api/download_file/', views.api_download_file, name='download_file'),
    path('api/upload_file/', views.api_upload_file, name='upload_file'),
    path('api/doc', views.api_doc, name='doc'),
]
