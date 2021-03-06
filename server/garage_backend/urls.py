"""garage_backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from garage_backend.views import api, auth
from garage_backend import models


admin.site.register(models.User)
admin.site.register(models.Shop)
admin.site.register(models.Vehicle)
admin.site.register(models.VehicleNote)
admin.site.register(models.Service)
admin.site.register(models.Parts)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/user/<int:user_id>/', api.UserDetail.as_view()),
    path('api/vehicle/', api.Vehicle.as_view()),
    path('api/vehicle/<int:vehicle_id>/', api.VehicleDetail.as_view()),
    path('api/service/', api.Service.as_view()),
    path('api/service/<int:service_id>/', api.ServiceDetail.as_view()),
    path('api/shop/', api.Shop.as_view()),
    path('api/shop/<int:shop_id>/', api.ShopDetail.as_view()),
    path('api/vehiclenote/', api.VehicleNote.as_view()),
    path('api/vehiclenote/<int:vehicle_note_id>/', api.VehicleNoteDetail.as_view()),
    path('auth/signin/', auth.SignIn.as_view()),
    path('auth/register/', auth.Register.as_view()),
    path('auth/signout/', auth.SignOut.as_view()),
    path('auth/authenticate/', auth.Authenticate.as_view()),
]