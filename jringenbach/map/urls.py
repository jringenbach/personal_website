from django.conf.urls import url
from . import views

urlpatterns = [
	url(r'^begin$', views.begin, name="begin"),
	url(r'^map02$', views.map02, name="map02"),
]
