from django.conf.urls import url
from . import views

urlpatterns = [
	url(r'^accueil$', views.accueil, name="accueil"),
	url(r'^article/(\d+)$', views.lire, name="lire"),
	url(r'addition/(?P<nombre1>\d+)/(?P<nombre2>\d+)/$', views.addition),
]
