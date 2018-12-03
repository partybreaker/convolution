from django.urls import path

from . import views


urlpatterns = [
    path('phone/list', views.view_list_phone, name='list'),
    path('phone/search', views.search_phone, name='search'),
    # path('phone/create', views.create_phone, name='create')
]
