from django.conf.urls import url
from . import views

urlpatterns = [
	url(r'^begin$', views.begin, name="begin"),
	url(r'^map02$', views.map02, name="map02"),
	url(r'^map03$', views.map03, name="map03"),
	url(r'^map04$', views.map04, name="map04"),
]
