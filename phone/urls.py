from django.urls import path

from . import views


urlpatterns = [
    path('phone/list', views.view_list_phone, name='list'),
    path('', views.search_phone, name='home'),
    path('phone/history', views.search_history, name='history')
    # path('phone/create', views.create_phone, name='create')
]
