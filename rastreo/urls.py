from django.contrib import admin
from django.contrib.auth.decorators import login_required
from django.urls import path, include
from rest_framework import routers

from tracking.views import VehiculoAPI
from tracking.views import InicioView

#Rutas

router = routers.DefaultRouter()

router.register(
    r'vehiculo',
    VehiculoAPI,
    'vehiculo'
)

urlpatterns = [
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
    path('', login_required(InicioView.as_view())),
]
