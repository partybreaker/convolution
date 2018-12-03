from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('profile/', views.view_profile, name='profile'),
    path('profile/edit', views.edit_profile, name='edit-profile')
]
