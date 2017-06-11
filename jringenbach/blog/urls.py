from django.conf.urls import url
from . import views

urlpatterns = [
	url(r'^accueil$', views.home),
	url(r'^article/(\d+)$', views.view_article),
	url(r'addition/(?P<nombre1>\d+)/(?P<nombre2>\d+)/$', views.addition),
	url(r'bonjour/([A-Za-z0-9]{,15})/$', views.bonjour),
]
