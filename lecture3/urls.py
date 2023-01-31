from django.urls import path
from . import views
urlpatterns = [
    path( "" , views.user_interfaces , name="UI_0"),
    path( "RPG" , views.rpg , name="RPG" ),
    path( "index", views.index, name="pokemon"),
    path('fin' , views.fin),
    path('final',views.final,name="error")
]