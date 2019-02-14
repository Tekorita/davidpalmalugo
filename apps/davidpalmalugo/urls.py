from django.urls import path, include
#from django.contrib.auth.decorators import login_required

from apps.mascota.views import index

urlpatterns = [
    path('', index, name='index'),
]