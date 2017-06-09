from django.conf.urls import url
from . import views

urlpatterns = [
	url(r'^accueil$', views.home),
	url(r'^article/(\d+)$', views.view_article),
	url(r'contact$', views.contact),
]
